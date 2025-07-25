import { useState } from 'react';

import BlurText from '@components/common/BlurText';
import Sakura from './common/Sakura';
import WaveAnimation from '@components/common/WaveAnimation.tsx';
import clsx from 'clsx';

export default function Header() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <>
      <header className="relative">
        <Sakura />
        <div className="absolute z-10 w-full">
          <div className="flex flex-col items-center justify-center mt-7 gap-2">
            <p className="font-merriweather text-[9px] tracking-[0.5em]">WEDDING INVITATION</p>
            <div className="flex items-center gap-2">
              <p className="text-sm">김윤재</p>
              <span className="text-xs">🖤</span>
              <p className="text-sm">이지은</p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="https://kr.object.ncloudstorage.com/gandi-cdn/pic/cover.webp"
            alt="cover"
            loading="lazy"
            className="w-full h-auto"
            onLoad={() => setImgLoaded(true)}
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0 w-full h-[45px]',
              'pointer-events-none  bg-gradient-to-t from-white/80 from-30% to-transparent',
            )}
          />
          <div className="absolute -bottom-5 left-0 right-0 h-5 bg-gradient-to-b from-white to-white/20" />
        </div>
        {imgLoaded && (
          <div className="absolute z-20 bottom-[10%] w-full flex flex-col">
            <BlurText
              text="We are"
              className="text-6xl text-white font-blackoutOldskull text-left -rotate-10 w-[60%]"
            />
            <BlurText
              text="getting married"
              className="text-6xl text-white font-blackoutOldskull text-center -rotate-10"
            />
          </div>
        )}
        <div className='absolute h-20 w-full bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent' />
        <WaveAnimation />
      </header>
      <aside className="flex justify-center mt-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-md mt-7">2025년 9월 13일 토요일 오후 12시 30분</p>
          <p className="text-md">더채플 앳 논현 5층 라메르홀</p>
        </div>
      </aside>
    </>
  );
}