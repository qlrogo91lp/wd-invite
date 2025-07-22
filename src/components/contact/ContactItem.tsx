import { AiFillPhone } from 'react-icons/ai';
import { LiaSmsSolid } from "react-icons/lia";
import { motion } from 'framer-motion';

type Props = {
  name: string;
  description?: string;
  phone: string;
}

export default function  Contact({ name, description, phone }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {description && <p className='text-sm'>{description}</p>}
      <div className='flex justify-between items-center'>
        <p className='font-nanumGothic font-bold'>{name}</p>
        <div className='flex items-center gap-4'>
          <motion.button
            type="button"
            onClick={() => window.location.href = 'tel:' + phone}
            className="p-1 rounded-full hover:bg-gray-100 transition"
            whileTap={{ scale: 0.9 }}
          >
            <AiFillPhone size={20} />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => window.location.href = 'sms:' + phone}
            className="p-1 rounded-full hover:bg-gray-100 transition"
            whileTap={{ scale: 0.9 }}
          >
            <LiaSmsSolid size={20} />
          </motion.button>
        </div>

      </div>
    </div>
  );
}