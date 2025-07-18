import Tmap from '@assets/icons/tmap_icon.svg'
import { LOCATION_NAME, LOCATION_X, LOCATION_Y } from './Directions';

export default function TmapLauncher() {
	const onClickHandler = () => {
		const appKey = import.meta.env.VITE_TMAP_APP_KEY;
		// Tmap 앱 중계 페이지 URL (앱 실행 or 스토어 유도)
		const relayUrl = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${appKey}&goalname=${encodeURIComponent(LOCATION_NAME)}&goalx=${LOCATION_Y}&goaly=${LOCATION_X}`;

		// 앱 링크 먼저 시도
		window.location.href = relayUrl;
	}

	return (
		<button type='button' onClick={onClickHandler} className='flex gap-2 items-center cursor-pointer'>
			<img src={Tmap} alt='tmap' width={20}/>
			<p className='text-sm'>T맵</p>
		</button>
	);
}