import { useEffect } from 'react';
import { GoShare } from 'react-icons/go'

export default function ShareButton() {

	const shareWithTemplate = () => {
		window.Kakao.Share.sendCustom({
			templateId: 121369,
			templateArgs: {
				title: '윤재와 지은의 결혼식',
				desc: '윤재와 지은의 결혼식 초대장',
				link: 'https://wd-invite.vercel.app',
			},
		});
	};

	useEffect(() => {
		if (!window.Kakao.isInitialized()) {
			window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
		}
	}, []);

	return (
		<button
			type='button'
			className='flex items-center justify-center gap-2 px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md mx-15'
			onClick={shareWithTemplate}
		>
			<GoShare />
			카카오톡 공유하기
		</button>
	)
}