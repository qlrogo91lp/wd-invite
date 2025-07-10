import { useState } from 'react';

import BlurText from '@components/common/BlurText';
import Sakura from './common/Sakura';
import Bottom from '@assets/svgs/bottomEdge.svg';
import Wave from 'react-wavify';

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
        <img
          src="https://kr.object.ncloudstorage.com/gandi-cdn/pic/cover.webp"
          alt="cover"
          loading="lazy"
          className="w-full h-auto"
          onLoad={() => setImgLoaded(true)}
        />
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
        <div className='absolute w-full bottom-0'>
          <img src={Bottom} alt='bottom' />
        </div>
        <div className='absolute w-full h-10 -bottom-5'>
          <Wave
            fill="#ffffff"
            paused={false}
            className='flex h-6'
            options={{
              height: 5,
              amplitude: 10,
              speed: 0.2,
              points: 3,
            }}
          />
        </div>
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