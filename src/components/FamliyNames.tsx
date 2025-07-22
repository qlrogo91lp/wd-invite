import ScrollFadeIn from './common/ScrollFadeIn';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from '@components/common/Modal2.tsx';
import Contact from '@components/contact/Contact.tsx';

export default function FamilyNames() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const fontStyle = 'font-nanumGothic text-[13px] font-bold';
	
	return (
		<ScrollFadeIn>
			<article className='flex flex-col gap-10'>
				<div className='w-full grid grid-cols-[55px_15px_55px_40px_40px] text-center px-10 items-center justify-center'>
					<p className={fontStyle}>김희택</p>
					<p>·</p>
					<p className={fontStyle}>정미자<span className='font-medium ml-[1px]'>의</span></p>
					<p className='font-nanumGothic text-[13px]'>아들</p>
					<p className={fontStyle}>윤재</p>
					<p className={fontStyle}>이창수</p>
					<p>·</p>
					<p className={fontStyle}>신명숙<span className='font-medium ml-[1px]'>의</span></p>
					<p className='font-nanumGothic text-[13px]'>딸</p>
					<p className={fontStyle}>지은</p>
				</div>
				<motion.button
					type='button'
					className='flex items-center justify-center gap-2 px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md mx-15'
					onClick={() => setIsOpen(!isOpen)}
					whileTap={{ scale: 0.95 }}
				>
					연락하기
				</motion.button>
			</article>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<Contact onClose={() => setIsOpen(false)} />
			</Modal>
		</ScrollFadeIn>
	);
}