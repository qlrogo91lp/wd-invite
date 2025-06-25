export default function WaveAnimation() {
  return (
    <>
      <svg
        className="absolute bottom-0 w-full h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 54c30 0 58-28 88-28s58 28 88 28
               58-28 88-28 58 28 88 28 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#ffffff70" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#ffffff50" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#ffffff30" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
        </g>
      </svg>
    </>
  );
}