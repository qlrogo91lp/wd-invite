import { GoShare } from 'react-icons/go'
import { shareWithKakaoTemplate } from '@utils/share.ts';

export default function ShareButton() {
	return (
		<button
			type='button'
			className='flex items-center justify-center gap-2 px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md mx-15'
			onClick={shareWithKakaoTemplate}
		>
			<GoShare />
			카카오톡 공유하기
		</button>
	)
}