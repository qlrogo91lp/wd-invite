import { Suspense, useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import {
  collection,
  addDoc,
  query,
  orderBy,
  Timestamp,
  getDocs,
  startAfter,
  limit,
  deleteDoc,
  doc,
  updateDoc,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Loading from '../common/Loading';

type Comment = {
  id: string;
  name: string;
  text: string;
  createdAt: Timestamp;
};

const PAGE_SIZE = 10;

export default function CommentBox() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editText, setEditText] = useState('');
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchComments = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    let q;
    if (reset || !lastDoc) {
      q = query(
        collection(db, 'comments'),
        orderBy('createdAt', 'desc'),
        limit(PAGE_SIZE),
      );
    } else {
      q = query(
        collection(db, 'comments'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDoc),
        limit(PAGE_SIZE),
      );
    }

    const snapshot = await getDocs(q);
    const fetched = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Comment[];

    if (reset) {
      setComments(fetched);
    } else {
      setComments((prev) => [...prev, ...fetched]);
    }

    setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
    setHasMore(fetched.length === PAGE_SIZE);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments(true);
  }, []);

  const handleAddComment = async () => {
    if (!newComment.trim() || !name.trim()) return;
    try {
      await addDoc(collection(db, 'comments'), {
        name: name,
        text: newComment,
        createdAt: Timestamp.now(),
      });
      setNewComment('');
      setName('');
      await fetchComments(true);
    } catch (e) {
      alert('댓글 등록에 실패했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  const handleDeleteComment = async (id: string) => {
    if (!confirm('정말로 이 댓글을 삭제하시겠습니까?')) return;
    try {
      await deleteDoc(doc(db, 'comments', id));
      await fetchComments(true);
    } catch (e) {
      alert('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  const handleStartEdit = (comment: Comment) => {
    setEditingId(comment.id);
    setEditName(comment.name);
    setEditText(comment.text);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditText('');
  };

  const handleUpdateComment = async (id: string) => {
    if (!editText.trim() || !editName.trim()) return;
    try {
      await updateDoc(doc(db, 'comments', id), {
        name: editName,
        text: editText,
      });
      setEditingId(null);
      setEditName('');
      setEditText('');
      await fetchComments(true);
    } catch (e) {
      alert('댓글 수정에 실패했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <section className="p-4">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex gap-2 w-full justify-start">
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-200 rounded w-1/3 focus:border-gray-400 focus:outline-none"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={handleAddComment} className="px-4 py-2 text-white bg-gray-300 rounded">
              등록
            </button>
          </div>
          <input
            name="comment"
            className="p-2 border border-gray-200 rounded focus:border-gray-400 focus:outline-none"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </div>
        <ul className="space-y-2 min-h-[40px]">
          {loading ? (
            <li className='flex items-center justify-center'>
              <Loading />
            </li>
          ) : (
            comments.map((c) => (
              <li key={c.id} className="p-4 rounded bg-pink-50 shadow-md">
                {editingId === c.id ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded bg-white focus:border-gray-400 focus:outline-none"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <input
                      className="p-2 border border-gray-300 rounded bg-white focus:border-gray-400 focus:outline-none"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => handleUpdateComment(c.id)}
                        className="text-sm text-gray-500"
                      >
                        저장
                      </button>
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="text-sm text-gray-500"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm">{c.name}</p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(c)}
                          className="text-sm text-gray-500"
                        >
                          수정
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteComment(c.id)}
                          className="text-sm text-gray-500"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                    <p className="text-sm">{c.text}</p>
                    <p className="text-xs text-gray-500">{c.createdAt.toDate().toLocaleString()}</p>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        {hasMore && (
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center gap-2 text-gray-400 mx-auto mt-6"
            onClick={() => fetchComments()}
            disabled={loading}
          >
            {loading ? <Loading /> :
              <>
                <AiOutlinePlus size={20} />
                더 보기
              </>
            }
          </motion.button>
        )}
      </section>
    </Suspense>
  )
    ;
}
