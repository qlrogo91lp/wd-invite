import ScrollFadeIn from './common/ScrollFadeIn';

export default function FamilyNames() {
	return (
		<ScrollFadeIn>
			<div className='w-full pb-8'>
				<img src='https://kr.object.ncloudstorage.com/gandi-cdn/pic/wd2.jpg' alt='cover' loading='lazy' />
			</div>
			<article className='w-full grid grid-cols-[1fr_15px_1fr_1fr_1fr] gap-1 text-center px-15'>
				<p>김희택</p>
				<p>·</p>
				<p>정미자<span className='text-sm'>의</span></p>
				<p>아들</p>
				<p>윤재</p>
				<p>이창수</p>
				<p>·</p>
				<p>신명숙<span className='text-sm'>의</span></p>
				<p>딸</p>
				<p>지은</p>
			</article>
		</ScrollFadeIn>
	);
}