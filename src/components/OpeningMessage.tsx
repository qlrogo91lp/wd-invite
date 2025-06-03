import { SpaceBlock } from './common/SpaceBlock'

export default function OpeningMessage() {
	return (
		<section className='flex flex-col items-center justify-center p-6'>
			<p className='font-[playFair]'>Invite you</p>
			<SpaceBlock height='h-10'/>
			<p>사소한 일에도</p>
			<p>웃을 수 있고</p>
			<SpaceBlock />
			<p>서로를 아껴줄 수 있는</p>
			<p>사람이 되어</p>
			<SpaceBlock />
			<p>이제는 부부라는 </p>
			<p>이름으로 함께하려 합니다.</p>
			<SpaceBlock />
			<p>저희 두 사람의 새로운 시작에</p>
			<p>따듯한 축복으로 함게해 주세요.</p>
			<SpaceBlock />
			<p>감사합니다.</p>
		</section>
	);
}