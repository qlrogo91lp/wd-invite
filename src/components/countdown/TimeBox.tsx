type Props = {
	label: string;
	value: number;
}

export default function TimeBox({ label, value }: Props) {
	return (
		<article className="border border-[rgba(242,238,238,1)] rounded-xl bg-[rgba(250,248,248,1)] w-[50px] text-center py-1">
			<div className="text-2xl text-pink-300">
				{value.toString().padStart(2, '0')}
			</div>
			<div className="text-sm text-pink-300">{label}</div>
		</article>
	);
};