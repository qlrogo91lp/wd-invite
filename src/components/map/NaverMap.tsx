import { useEffect, useRef } from 'react';

export default function NaverMap() {
	const mapRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mapRef.current || !window.naver) return;

		const map = new window.naver.maps.Map(mapRef.current, {
			center: new window.naver.maps.LatLng(37.5050847, 127.0343736),
			zoom: 16,
		});

		new window.naver.maps.Marker({
			position: new window.naver.maps.LatLng(37.5050847, 127.0343736),
			map,
		});
	}, []);

	return <div ref={mapRef} className="w-full h-[400px]" />;
}