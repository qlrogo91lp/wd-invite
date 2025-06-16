import { useState } from 'react';
import Edge from '@svgs/bottomEdge.svg';
import BlurText from '@components/common/BlurText';

export default function Header() {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<header className='relative flex flex-col'>
			<div className='absolute z-10 flex justify-between w-full p-4 bg-gradient-to-b from-black/70'>
				<p className='text-white font-merriweather text-l'>YOONJAE</p>
				<p className='text-white font-merriweather text-l'>JIEUN</p>
			</div>
			<img
				src='https://kr.object.ncloudstorage.com/gandi-cdn/pic/wd13.webp'
				alt='cover'
				loading='lazy'
				className='w-full h-auto rounded-t-full mt-20 px-5'
				onLoad={() => setImgLoaded(true)}
			/>
			{imgLoaded && (
				<div className='absolute inset-0 z-20 flex items-center justify-center'>
					<BlurText
						text='We are getting married'
						className='text-3xl font-bold text-white'
					/>
				</div>
			)}
			<aside className='absolute z-10 flex flex-col items-center justify-center w-full bottom-15'>
				<p className='mb-5 text-white font-merriweather text-l'>September 13, 2025</p>
				<p className='text-white text-[0.5rem] tracking-tight'>
					We, who have similar smiles, are getting married.
				</p>
			</aside>
			<img src={Edge} alt='edge' className='absolute bottom-[-1px]' />
		</header>
	);
}