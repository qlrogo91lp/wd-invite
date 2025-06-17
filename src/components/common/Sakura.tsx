import ReactCanvasConfetti from "react-canvas-confetti";

export default function Sakura() {
	return (
		<ReactCanvasConfetti
			onInit={({ confetti }) => {
				const interval = setInterval(() => {
					confetti({
						particleCount: 4,
						angle: 120,
						spread: 100,
						startVelocity: 30,
						origin: { x: Math.random(), y: -0.1 },
						colors: ["#FFB7C5", "#FFA6C9", "#FFDDEE"],
						gravity: 0.5,
						ticks: 500,
						scalar: 1.5,
						drift: 0.5,
					});
				}, 300);

				return () => clearInterval(interval);
			}}
			style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20 }}
		/>
	);
}
