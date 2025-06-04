import { Suspense, useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import {
	collection,
	addDoc,
	query,
	orderBy,
	Timestamp,
	onSnapshot,
} from 'firebase/firestore';
import Loading from '../common/Loading';

type Comment = {
	id: string;
	text: string;
	createdAt: Timestamp;
};

export default function CommentBox() {
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState('');

	const handleAddComment = async () => {
		if (!newComment.trim()) return;
		await addDoc(collection(db, 'comments'), {
			text: newComment,
			createdAt: Timestamp.now(),
		});
		setNewComment('');
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
			<section className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
				<h2 className="text-xl font-bold mb-4">💬 실시간 댓글</h2>
				<div className="flex gap-2 mb-4">
					<input
						className="border flex-1 p-2 rounded"
						placeholder="댓글을 입력하세요"
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
					/>
					<button
						onClick={handleAddComment}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						등록
					</button>
				</div>
				<ul className="space-y-2">
					{comments.map((c) => (
						<li key={c.id} className="border p-2 rounded">
							{c.text}
						</li>
					))}
				</ul>
			</section>
		</Suspense>
	);
}
