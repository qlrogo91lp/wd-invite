import { Suspense, useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import {
	collection,
	addDoc,
	query,
	orderBy,
	Timestamp,
	onSnapshot,
	deleteDoc,
	doc,
	updateDoc,
} from 'firebase/firestore';
import Loading from '../common/Loading';

type Comment = {
	id: string;
	name: string;
	text: string;
	createdAt: Timestamp;
};

export default function CommentBox() {
	const [comments, setComments] = useState<Comment[]>([]);
	const [name, setName] = useState('');
	const [newComment, setNewComment] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editName, setEditName] = useState('');
	const [editText, setEditText] = useState('');

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
		} catch (error) {
			console.error('댓글 등록 실패:', error);
			alert('댓글 등록에 실패했습니다. 다시 시도해주세요.');
		}
	};

	const handleDeleteComment = async (id: string) => {
		if (!confirm('정말로 이 댓글을 삭제하시겠습니까?')) return;
		try {
			await deleteDoc(doc(db, 'comments', id));
		} catch (error) {
			console.error('댓글 삭제 실패:', error);
			alert('댓글 삭제에 실패했습니다. 다시 시도해주세요.');
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
		} catch (error) {
			console.error('댓글 수정 실패:', error);
			alert('댓글 수정에 실패했습니다. 다시 시도해주세요.');
		}
	};

	useEffect(() => {
		const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));

		// ✅ 실시간 리스너 설정
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const updated = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			})) as Comment[];
			setComments(updated);
		});

		// 🧹 컴포넌트 언마운트 시 리스너 해제
		return () => unsubscribe();
	}, []);

	return (
		<Suspense fallback={<Loading />}>
			<section className="p-4">
				<div className='flex flex-col gap-2 mb-4'>
					<div className="flex gap-2 w-full justify-start">
						<input
							type="text"
							name="name"
							className='p-2 border border-gray-300 rounded w-1/3'
							placeholder='이름'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button type='button' onClick={handleAddComment} className="px-4 py-2 text-white bg-gray-300 rounded">
							등록
						</button>
					</div>
					<input
						name='comment'
						className="p-2 border border-gray-300 rounded"
						placeholder="댓글을 입력하세요"
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
					/>
				</div>
				<ul className="space-y-2">
					{comments.map((c) => (
						<li key={c.id} className="border p-4 rounded bg-[#f9f6fc] border-[#dddddd]">
							{editingId === c.id ? (
								<div className='flex flex-col gap-2'>
									<input
										type="text"
										className='p-2 border border-gray-300 rounded'
										value={editName}
										onChange={(e) => setEditName(e.target.value)}
									/>
									<input
										className="p-2 border border-gray-300 rounded"
										value={editText}
										onChange={(e) => setEditText(e.target.value)}
									/>
									<div className='flex justify-end gap-2'>
										<button
											type='button'
											onClick={() => handleUpdateComment(c.id)}
											className="text-sm text-blue-500"
										>
											저장
										</button>
										<button
											type='button'
											onClick={handleCancelEdit}
											className="text-sm text-gray-500"
										>
											취소
										</button>
									</div>
								</div>
							) : (
								<div className='flex flex-col gap-2'>
									<div className='flex justify-between'>
										<p className='text-sm'>{c.name}</p>
										<div className='flex gap-2'>
											<button
												type='button'
												onClick={() => handleStartEdit(c)}
												className='text-sm text-gray-500'
											>
												수정
											</button>
											<button
												type='button'
												onClick={() => handleDeleteComment(c.id)}
												className='text-sm text-gray-500'
											>
												삭제
											</button>
										</div>
									</div>
									<p className='text-sm'>{c.text}</p>
									<p className='text-xs text-gray-500'>{c.createdAt.toDate().toLocaleString()}</p>
								</div>
							)}
						</li>
					))}
				</ul>
			</section>
		</Suspense>
	);
}
