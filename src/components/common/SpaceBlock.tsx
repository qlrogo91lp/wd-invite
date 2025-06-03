type Props = {
	height?: string;
}

export function SpaceBlock({ height = 'h-4' }: Props) {
	return <div className={`${height}`} />
}