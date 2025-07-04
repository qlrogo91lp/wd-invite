import { GrPrevious, GrNext } from 'react-icons/gr';
import { motion } from 'framer-motion';

type Props = {
  imgSrc: string;
  imgAlt: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ImageDetailItem({ imgSrc, imgAlt, onPrev, onNext }: Props) {
  const onPrevHandler = () => {
    if (onPrev) onPrev();
  };

  const onNextHandler = () => {
    if (onNext) onNext();
  };

  return (
    <article className="relative">
      {onPrev && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onPrevHandler}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-100">
          <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            <GrPrevious size={35} color="white" />
          </span>
        </motion.button>
      )}
      <img src={imgSrc} alt={imgAlt} className="touch-none" />
      {onNext && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onNextHandler}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-100">
          <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            <GrNext size={35} color="white" />
          </span>
        </motion.button>)
      }
    </article>
  );
}