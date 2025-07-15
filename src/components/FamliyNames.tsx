import ScrollFadeIn from './common/ScrollFadeIn';

export default function FamilyNames() {
	return (
		<ScrollFadeIn>
			<article className='w-full grid grid-cols-[1fr_15px_1fr_1fr_1fr] gap-2 text-center px-10 text-lg'>
				<p className='font-bold'>김희택</p>
				<p>·</p>
				<p className='font-bold'>정미자<span className='text-sm'>의</span></p>
				<p>아들</p>
				<p className='font-bold'>윤재</p>
				<p className='font-bold'>이창수</p>
				<p>·</p>
				<p className='font-bold'>신명숙<span className='text-sm'>의</span></p>
				<p>딸</p>
				<p className='font-bold'>지은</p>
			</article>
		</ScrollFadeIn>
	);
}