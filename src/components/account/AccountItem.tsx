import { IoCopyOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Toast from '@components/common/Toast.tsx';

type Props = {
  type: string;
  name: string;
  bank: string;
  account: string;
}

export default function AccountItem( { type, name, bank, account }: Props) {
  const [showToast, setShowToast] = useState(false);

  const onClickCopy = async () => {
    await navigator.clipboard.writeText(`${bank} ${account}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  }

  return (
    <div className='border border-gray-100 p-6 flex gap-4 justify-between items-center text-gray-500 text-sm'>
      <div className='flex flex-col gap-2'>
        <p>{type}<span className='ml-1 text-black'>{name}</span></p>
        <p>{bank}<span className='ml-1'>{account}</span></p>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className='px-2 py-1 border border-gray-100 rounded-md flex gap-1 items-center'
        onClick={onClickCopy}
      >
        <IoCopyOutline size={15} />
        <p>복사</p>
      </motion.button>
      <Toast message="복사되었습니다" visible={showToast} />
    </div>
  );
}