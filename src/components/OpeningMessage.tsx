import ScrollFadeIn from './common/ScrollFadeIn'
import { SpaceBlock } from './common/SpaceBlock'

export default function OpeningMessage() {
	return (
		<ScrollFadeIn>
			<div className='flex flex-col items-center justify-center p-6 text-sm'>
				<p>사소한 일에도 웃을 수 있고</p>
				<SpaceBlock />
				<p>서로를 아껴줄 수 있는 사람이 되어</p>
				<SpaceBlock />
				<p>이제는 부부라는 이름으로 함께하려 합니다.</p>
				<SpaceBlock />
				<p>저희 두 사람의 새로운 시작에</p>
				<SpaceBlock />
				<p>따듯한 축복으로 함께해 주세요.</p>
			</div>
		</ScrollFadeIn>
	);
}