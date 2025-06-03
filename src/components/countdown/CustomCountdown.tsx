import Countdown from 'react-countdown';
import TimeBox from './TimeBox';
import Colon from './Colon';

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
			return <p>결혼식 날입니다! 🎉</p>;
		} else {
			return (
				<section className="w-full font-light text-center">
					<div className="flex justify-center gap-2">
						<TimeBox label="Days" value={days} />
						<Colon />
						<TimeBox label="Hour" value={hours} />
						<Colon />
						<TimeBox label="Min" value={minutes} />
						<Colon />
						<TimeBox label="Sec" value={seconds} />
					</div>
					<p className="mt-5 text-medium">
						윤재 <span className="text-pink-400">💗</span> 지은의 결혼식이 <span className="text-[indianred] font-bold">{days + 1} </span>일 남았습니다.
					</p>
				</section>
			);
		}
	};

	return <Countdown date={weddingDate} renderer={renderer} />;
};
