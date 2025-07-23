import Countdown from 'react-countdown';
import TimeBox from './TimeBox';
import Colon from './Colon';
import ScrollFadeIn from '@components/common/ScrollFadeIn';

// 날짜 설정: YYYY-MM-DD 형식
const weddingDate = new Date('2025-09-13T12:30:00');

interface ICountdownProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

export default function CustomCountdown() {
	const renderer = ({ days, hours, minutes, seconds, completed }: ICountdownProps) => {
		if (completed) {
			return <p className='text-center'>결혼식 날입니다! 🎉</p>;
		} else {
			return (
				<section className="w-full text-center">
					<div className="flex justify-center gap-2">
						<TimeBox label="일" value={days} />
						<Colon />
						<TimeBox label="시" value={hours} />
						<Colon />
						<TimeBox label="분" value={minutes} />
						<Colon />
						<TimeBox label="초" value={seconds} />
					</div>
					<p className="mt-5 text-sm">
						윤재
						<span className="text-pink-400">💗</span> 지은의 결혼식이
						<span className="text-[#f595d2] font-nanumGothic font-bold ml-1">{days + 1}</span>
						일 남았습니다.
					</p>
				</section>
			);
		}
	};

	return (
		<ScrollFadeIn>
			<Countdown date={weddingDate} renderer={renderer} />
		</ScrollFadeIn>
	);
};
