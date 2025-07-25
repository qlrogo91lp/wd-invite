import ReactCanvasConfetti from 'react-canvas-confetti';

export default function Sakura() {
  return (
    <ReactCanvasConfetti
      onInit={({ confetti }) => {
        const interval = setInterval(() => {
          confetti({
            particleCount: 1,
            angle: 120,
            spread: 100,
            startVelocity: 30,
            origin: { x: Math.random(), y: 0 },
            colors: ['#FFDDEE'],
            gravity: 0.9,
            ticks: 500,
            scalar: 1.5,
            drift: 0.5,
            zIndex: 999,
            shapes: ['circle'],
          });
        }, 300);

        return () => clearInterval(interval);
      }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        zIndex: 999,
      }}
    />
  );
}
