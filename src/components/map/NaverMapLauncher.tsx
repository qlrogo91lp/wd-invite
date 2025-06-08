import { LOCATION_NAME, LOCATION_X, LOCATION_Y } from './Directions';
import Naver from '@icons/naver_icon.png'

export default function NaverMapLauncher() {
	const onClickHandler = () => {
		// 앱 중계 페이지 URL (앱 실행 or 스토어 유도)
		const relayUrl = `http://naverapp.naver.com/place/?lat=${LOCATION_X}&lng=${LOCATION_Y}&name=${encodeURIComponent(LOCATION_NAME)}&version=6`;

		// 웹 fallback URL (지도 웹사이트로)
		const webUrl = `https://map.naver.com/p/entry/place/${LOCATION_X},${LOCATION_Y}`;

		// 앱 링크 먼저 시도
		window.location.href = relayUrl;

		// 앱 없을 경우 웹 fallback
		setTimeout(() => {
			window.location.href = webUrl;
		}, 1500);

	};

	return (
		<button onClick={onClickHandler}>
			<img src={Naver} alt='naver-map' width={40}/>
		</button>
	);
}