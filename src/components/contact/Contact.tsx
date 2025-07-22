import ContactItem from './ContactItem';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

type Props = {
  onClose: () => void;
}

export default function Contact({ onClose }: Props) {
  return (
    <div className='w-screen grid grid-cols-2 gap-10 min-h-[20px] rounded-lg bg-white px-4 py-10 relative'>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute -top-10 right-0 z-100"
      >
        <span
          onClick={onClose}>
          <IoMdClose size={35} color="white" />
        </span>
      </motion.button>
      <ContactItem name='김윤재' phone='01028630238' description='신랑'/>
      <ContactItem name='이지은' phone='01030854322' description='신부' />
      <ContactItem name='김희택' phone='01052680238' description='신랑 아버지'/>
      <ContactItem name='이창수' phone='01023996473' description='신부 아버지' />
      <ContactItem name='정미자' phone='01089200238' description='신랑 어머니'/>
      <ContactItem name='신명숙' phone='01087818887' description='신부 어머니'/>
    </div>
  );
}