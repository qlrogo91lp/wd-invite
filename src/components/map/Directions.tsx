import ScrollFadeIn from '@components/common/ScrollFadeIn';
import KakaoMapLauncher from './KakaoMapLauncher';
import NaverMap from './NaverMap';
import NaverMapLauncher from './NaverMapLauncher';
import WayTitle from './WayTitle';
import { FaBus } from "react-icons/fa";
import { FaSubway } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TbParkingCircleFilled } from "react-icons/tb";
import TmapLauncher from './TmapLauncher';

export const LOCATION_X = 37.5050847;
export const LOCATION_Y = 127.0343736;
export const LOCATION_NAME = '더채플앳논현';

const Divider = () => {
	return <div className='w-px h-[20px] border-r-1 border-gray-300 mx-px' />;
}

export default function Directions() {
	return (
		<ScrollFadeIn>
			<div className='flex flex-col gap-10 px-5'>
				<hgroup className='flex flex-col items-center'>
					<h2 className='mb-12 text-lg font-bold '>오시는 길</h2>
					<p className='text-gray-700'>서울시 강남구 논현로 549</p>
					<p className='text-gray-700'>더채플 앳 논현 5층 라메르홀</p>
				</hgroup>
				<NaverMap />
				<article className='flex justify-evenly border border-gray-300 rounded-lg px-5 py-4 h-full bg-white'>
					<NaverMapLauncher />
					<Divider />
					<KakaoMapLauncher />
					<Divider />
					<TmapLauncher />
				</article>
				<article className='flex flex-col items-start justify-center gap-2 px-5 text-center text-sm text-left'>
					<WayTitle title='버스' icon={<FaBus size={25} />} />
					<div className='flex items-center gap-2'>
						<FaCircle color='rgb(56, 109, 232)' size={10} />
						<p>간선 : 147 / 463</p>
					</div>
					<div className='flex items-center gap-2'>
						<FaCircle color='rgb(61, 195, 68)' size={10} />
						<p>지선 : 4211 </p>
						</div>
					<div className='flex items-center gap-2'>
						<FaCircle color='rgb(214, 50, 50)' size={10} /> 
						<p>광역 : 3600 / 9600</p>
						</div>
					<p>차병원(역삼방면) 하차 후 역삼역 방면 50M</p>
					<WayTitle title='지하철' icon={<FaSubway size={25} />} />
					<div className='flex items-center gap-2'>
						<FaCircle color='#00A84D' size={10} />
						<p>지하철 역삼역 (2호선) : </p>
					</div>
					<p>6번 출구로 나와 좌측방향으로 450M</p>
					<div className='flex items-center gap-1'>
						<FaCircle color='#BDB092' size={10} />
						<p>지하철 언주역 (9호선) : </p>
					</div>
					<p>7번 출구로 나와 정면방향으로 150M</p>
					<WayTitle title='자가용' icon={<FaCar size={25} />} />
					<div className='flex flex-col justify-center gap-1'>
						<p>내비게이션 "더 채플앳 논현" 또는</p>
						<p>"서울 강남구 논현로 549" 입력</p>
					</div>
					<WayTitle title='주차안내' icon={<TbParkingCircleFilled size={25} />} />
					<div className='flex flex-col justify-center gap-1'>
						<p>더채플앳논현 내부 1시간 30분 무료</p>
						<p>외부주차장 2시간 30분 무료</p>
						<p>{'=> 더채플앳논현 건물 앞 셔틀버스로 이동'}</p>
					</div>
				</article>
			</div>
		</ScrollFadeIn>
	);
}
