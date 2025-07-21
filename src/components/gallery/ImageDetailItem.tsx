import { useState, useRef } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import * as React from 'react';

type Props = {
  imgSrc: string;
  imgAlt: string;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
}

export default function ImageDetailItem({ imgSrc, imgAlt, onPrev, onNext, onClose }: Props) {
  const touchStartX = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const onPrevHandler = () => {
    if (onPrev) onPrev();
  };

  const onNextHandler = () => {
    if (onNext) onNext();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const threshold = 50; // 스와이프 인식 최소 거리(px)

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && onPrev) {
        onPrev();
      } else if (diff < 0 && onNext) {
        onNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <article
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute -top-10 right-0 z-100"
      >
        <span
          onClick={onClose}>
          <IoMdClose size={35} color="white" />
        </span>
      </motion.button>
      {onPrev && !isLoading && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onPrevHandler}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-100">
          <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            <GrPrevious size={35} color="white" />
          </span>
        </motion.button>
      )}
      <div className="w-full flex justify-center items-center">
        <img
          key={imgSrc}
          src={imgSrc}
          alt={imgAlt}
          className="touch-none select-none"
          onLoad={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        />
      </div>
      {onNext && !isLoading && (
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