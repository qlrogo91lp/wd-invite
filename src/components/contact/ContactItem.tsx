import { AiFillPhone } from 'react-icons/ai';

type Props = {
  name: string;
  description?: string;
  phone: string;
}

export default function  Contact({ name, description, phone }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {description && <p>{description}</p>}
      <div className='flex justify-between items-center'>
        <p>{name}</p>
        <button
          type="button"
          onClick={() => window.location.href = 'tel:' + phone}
          className="p-1 rounded-full hover:bg-gray-100 transition"
        >
          <AiFillPhone size={20} />
        </button>
      </div>
    </div>
  );
}