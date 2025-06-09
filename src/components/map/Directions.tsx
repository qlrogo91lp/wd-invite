import ScrollFadeIn from '@components/common/ScrollFadeIn';
import KakaoMapLauncher from './KakaoMapLauncher';
import NaverMap from './NaverMap';
import NaverMapLauncher from './NaverMapLauncher';

export const LOCATION_X = 37.5050847;
export const LOCATION_Y = 127.0343736;
export const LOCATION_NAME = '더채플 앳 논현';

export default function Directions() {
	return (
		<ScrollFadeIn>
			<div className='p-5'>
				<hgroup className='flex flex-col items-center mb-10'>
					<h2 className='pb-2 mb-12 text-2xl font-bold border-b border-gray-400 border-dotted'>오시는 길</h2>
					<p className='text-lg text-gray-700'>서울시 강남구 논현로 549</p>
					<p>더채플 앳 논현 5층 라메르홀</p>
				</hgroup>
				<NaverMap />
				<article className='flex justify-center gap-5 mt-10'>
					<NaverMapLauncher />
					<KakaoMapLauncher />
				</article>
			</div>
		</ScrollFadeIn>
	);
}
