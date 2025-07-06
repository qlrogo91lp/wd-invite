type Props = {
	title: string;
	subTitle?: string;
}

export default function Title({ title, subTitle }: Props) {
	return (
		<div className='flex flex-col gap-2 items-center justify-center w-[70%] mx-auto p-6 border-b border-gray-200 border-dashed'>
			<p className='text-xl text-primary font-dancingScript'>{title}</p>
			{subTitle && <p className='text-sm font-light'>{subTitle}</p>}
		</div>
	);
}