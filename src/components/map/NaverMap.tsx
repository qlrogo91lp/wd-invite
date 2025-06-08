import { useEffect, useRef } from 'react';
import { LOCATION_X, LOCATION_Y } from './Directions';

export default function NaverMap() {
	const mapRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mapRef.current || !window.naver) return;

		const map = new window.naver.maps.Map(mapRef.current, {
			center: new window.naver.maps.LatLng(LOCATION_X, LOCATION_Y),
			zoom: 16,
			zoomControl: true,
			zoomControlOptions: {
				position: window.naver.maps.Position.TOP_RIGHT
			}
		});

		new window.naver.maps.Marker({
			position: new window.naver.maps.LatLng(LOCATION_X, LOCATION_Y),
			map,
		});
	}, []);

	return <div ref={mapRef} className="w-full h-[400px]" />;
}