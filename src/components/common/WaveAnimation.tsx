export default function WaveAnimation() {
  return (
    <div className="absolute -bottom-[1px] h-10 w-full">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#ffffff70" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#ffffff50" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#ffffff30" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}