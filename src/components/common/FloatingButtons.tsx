import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VscUnmute } from 'react-icons/vsc';
import { VscMute } from 'react-icons/vsc';
import { IoShareSocialOutline } from 'react-icons/io5';
import BGM from '/bgm.mp3';
import { shareWithKakaoTemplate } from '@utils/share.ts';

export default function FloatingButtons() {
  const [onPlay, setOnPlay] = useState<boolean>(false);
  const ref = useRef<HTMLAudioElement>(new Audio(BGM));

  const onClickHandler = () => {
    setOnPlay(!onPlay);
    if (ref.current) {
      if (onPlay) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
    }
  };

  return (
    <aside className="fixed bottom-6 right-6 flex flex-col items-center gap-2 z-100">
      <audio ref={ref} src={BGM} loop autoPlay />
      <motion.button
        type="button"
        onClick={onClickHandler}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
      >
        {onPlay ? <VscUnmute size={20} /> : <VscMute size={20} />}
      </motion.button>
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={shareWithKakaoTemplate}
      >
        <IoShareSocialOutline size={20} />
      </motion.button>
    </aside>
  );
};
