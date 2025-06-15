import Edge from '@svgs/bottomEdge.svg';
import BlurText from './common/BlurText';

export default function Header() {
	return (
		<header className='relative flex flex-col'>
			<div className='absolute flex justify-between w-full p-4 bg-gradient-to-b from-black/70'>
				<p className='text-white font-merriweather text-l'>YOONJAE</p>
				<p className='text-white font-merriweather text-l'>JIEUN</p>
			</div>
			<img src='https://kr.object.ncloudstorage.com/gandi-cdn/pic/wd14.jpg' alt='cover' loading='lazy' />
			<div className='absolute inset-0 z-20 flex items-center justify-center'>
				<BlurText
					text='We are getting married'
					className="text-4xl font-bold text-white"
				/>
			</div>
			<aside className='absolute flex flex-col items-center justify-center w-full bottom-15'>
				<p className='mb-5 text-white font-merriweather text-l'>September 13, 2025</p>
				<p className='text-white text-[0.5rem] tracking-tight'>We, who have similar smiles, are getting married.</p>
				<p className='text-white text-[0.5rem] tracking-tight'>Holding onto each other`s clasped hands lightly we promise to live happily ever after.</p>
			</aside>
			<img src={Edge} alt='edge' className='absolute bottom-[-1px]' />
		</header>
	);
}