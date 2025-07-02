import { LOCATION_NAME, LOCATION_X, LOCATION_Y } from './Directions';
import Kakao from '@icons/kakao_icon.png'

export default function KakaoMapLauncher() {
	const onClickHandler = () => {
		// KakaoMap 앱 딥링크 (앱 설치 시 앱 실행됨)
		const appUrl = `kakaomap://look?p=${LOCATION_X},${LOCATION_Y}`;

		// 웹 fallback URL (앱이 없을 경우 사용)
		const webUrl = `https://map.kakao.com/link/map/${encodeURIComponent(LOCATION_NAME)},${LOCATION_X},${LOCATION_Y}`;

		// 앱 먼저 실행 시도
		window.location.href = appUrl;

		// 앱 없을 경우 웹 fallback
		setTimeout(() => {
			window.location.href = webUrl;
		}, 1500);
	}

	return (
		<button type='button' onClick={onClickHandler} className='flex gap-2 items-center cursor-pointer'>
			<img src={Kakao} alt='kakao-map' width={20} />
			<p className='text-sm'>카카오</p>
		</button>
	);
}