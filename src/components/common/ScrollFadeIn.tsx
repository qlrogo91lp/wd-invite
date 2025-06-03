import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ScrollDirection = 'up' | 'down' | 'left' | 'right';

interface IScrollFadeInProps {
	children: ReactNode;
	delay?: number;
	direction?: ScrollDirection;
}

export default function ScrollFadeIn({
	children,
	delay = 0,
	direction = 'up'
}: IScrollFadeInProps) {
	const directionOffset: Record<ScrollDirection, { y: number, x: number }> = {
		up: { y: 50, x: 0 },
		down: { y: -50, x: 0 },
		left: { y: 0, x: 50 },
		right: { y: 0, x: -50 }
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				...directionOffset[direction]
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0
			}}
			viewport={{
				once: false,
				amount: 0.3
			}}
			transition={{
				duration: 0.6,
				delay,
				ease: "easeOut"
			}}
		>
			{children}
		</motion.div>
	);
}