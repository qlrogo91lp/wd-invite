type Props = {
	label: string;
	value: number;
}

export default function TimeBox({ label, value }: Props) {
	return (
		<article className="border border-[rgba(242,238,238,1)] p-2 rounded-xl bg-[rgba(250,248,248,1)] w-[60px] text-center">
			<div className="text-2xl text-pink-300">
				{value.toString().padStart(2, '0')}
			</div>
			<div className="text-sm text-pink-300">{label}</div>
		</article>
	);
};