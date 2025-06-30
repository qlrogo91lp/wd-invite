import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  title: string;
  children?: React.ReactNode;
}

export default function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="mx-15 ">
      <div className='relative flex justify-center h-10 border border-gray-100 items-center'>
        <p className="text-sm">{title}</p>
        <IoIosArrowDown
          size={20}
          className={clsx(
            'absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300',
            { 'rotate-180': isOpen },
          )}
          onClick={onClickHandler}
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}