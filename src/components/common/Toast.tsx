import clsx from 'clsx';

type Props = {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: Props) {
  return (
    <div
      className={clsx(
        'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-80 px-4 py-2 text-sm text-white transition-opacity duration-300',
        { 'opacity-100': visible, 'opacity-0': !visible },
      )}
    >
      {message}
    </div>
  );
};