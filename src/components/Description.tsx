import { GiSpotedFlower } from 'react-icons/gi';
import { SpaceBlock } from '@components/common/SpaceBlock.tsx';
import ScrollFadeIn from '@components/common/ScrollFadeIn.tsx';

export default function Description() {
  return (
    <ScrollFadeIn>
      <section className="flex flex-col gap-3 items-center">
        <GiSpotedFlower width={20} color="#FFDDEE" />
        <SpaceBlock />
        <p className="font-bold text-md">
          화한은 정중히 사양합니다.
        </p>
        <p className="text-sm text-gray-500">
          축하해 주시는 마음만 감사히 받겠습니다.
        </p>
      </section>
    </ScrollFadeIn>
  );
}