import NaverMap from './NaverMap';

export default function Directions() {
	return (
		<section className='p-5'>
			<hgroup className='flex flex-col items-center mb-10'>
				<h2 className='text-2xl font-bold mb-12 border-b border-dotted border-gray-400 pb-2'>오시는 길</h2>
				<p className='text-lg text-gray-700'>서울시 강남구 논현로 549</p>
				<p>더채플 앳 논현 5층 라메르홀</p>
			</hgroup>
			<NaverMap />
		</section>
	);
}
