type Props = {
	title: string;
	icon?: React.ReactNode;
}

export default function WayTitle({ title, icon }: Props) {
	return (
		<div className='flex gap-3 items-center justify-start w-full mx-auto py-6 border-b border-gray-200 border-dashed mb-5'>
			 {icon && icon}
			<p className='text-lg font-nanumGothic font-bold'>{title}</p>
		</div>
	);
}