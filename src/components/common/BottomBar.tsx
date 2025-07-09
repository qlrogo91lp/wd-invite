import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VscUnmute } from 'react-icons/vsc';
import { VscMute } from 'react-icons/vsc';
import { IoShareSocialOutline } from 'react-icons/io5';
import BGM from '/bgm.mp3';

export default function BottomBar() {
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
    <section className="fixed bottom-0 left-0 right-0 w-[440px] mx-auto flex justify-center bg-white z-50 h-[45px] gap-10">
      <audio ref={ref} src={BGM} loop autoPlay />
      <motion.button type="button" onClick={onClickHandler} whileTap={{ scale: 0.9 }}>
        {onPlay ? <VscUnmute size={25} /> : <VscMute size={25} />}
      </motion.button>
      <motion.button type="button" whileTap={{ scale: 0.9 }}>
        <IoShareSocialOutline size={25} />
      </motion.button>
    </section>
  );
};
