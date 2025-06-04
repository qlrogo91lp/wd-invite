import { Suspense, lazy } from 'react';
import Loading from '../common/Loading';

const CommentBox = lazy(() => import('./CommentBox.tsx'));

export default function CommentBoxSuspense() {
	return (
		<Suspense fallback={<Loading />}>
			<CommentBox />
		</Suspense>
	);
}