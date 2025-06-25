import { useState } from 'react';

// import Edge from '@svgs/bottomEdge.svg';
import BlurText from '@components/common/BlurText';
import Sakura from './common/Sakura';
import WaveAnimation from '@components/common/WaveAnimation.tsx';

export default function Header() {
	const [imgLoaded, setImgLoaded] = useState(false);
	return (
		<>
			<header className='relative flex flex-col'>
				<Sakura />
				<div className='flex flex-col items-center justify-center mt-5 gap-3'>
					<p className='font-merriweather text-[9px]'>WEDDING INVIATION</p>
					<div className='z-10 flex justify-center w-full gap-2'>
						<p className='font-merriweather text-sm'>김윤재</p>
						<span className='text-xs'>🖤</span>
						<p className='font-merriweather text-sm'>이지은</p>
					</div>
				</div>
				<img
					src='https://kr.object.ncloudstorage.com/gandi-cdn/pic/wd13.webp'
					alt='cover'
					loading='lazy'
					className='w-full h-auto rounded-t-full mt-5 px-5'
					onLoad={() => setImgLoaded(true)}
				/>
				{imgLoaded && (
					<div className='absolute z-20 bottom-[10%] w-full flex justify-center'>
						<BlurText
							text='We are getting married'
							className='text-3xl font-bold text-white'
						/>
					</div>
				)}
				{/*<img src={Edge} alt='edge' className='absolute bottom-[-1px]' />*/}
				<WaveAnimation />
			</header>
			<aside className='flex justify-center mt-5'>
				<div className='flex flex-col items-center gap-2'>
					<p className='text-lg font-dancingScript text-gray-600'>We're getting married</p>
					<p className='text-sm mt-7'>2025년 9월 13일 토요일 오후 12시 30분</p>
					<p className='text-sm'>더채플 앳 논현 5층 라메르홀</p>
				</div>
			</aside>
		</>
	);
}