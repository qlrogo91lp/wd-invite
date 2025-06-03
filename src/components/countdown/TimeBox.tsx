type Props = {
	label: string;
	value: number;
}

export default function TimeBox({ label, value }: Props) {
	return (
		<article className="border border-[#e3d8f1] p-2 rounded-xl bg-[#f9f6fc] w-[60px] text-center">
			<div className="text-2xl text-[#7e51a0] font-medium">
				{value.toString().padStart(2, '0')}
			</div>
			<div className="text-sm text-[#a789c0]">{label}</div>
		</article>
	);
};