export default function WaveAnimation() {
  return (
    <div className="overflow-hidden absolute bottom-0 w-full leading-none">
      <svg
        className="h-7 w-full block -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave1"
            d="M-160 54c30 0 58-28 88-28s58 28 88 28
               58-28 88-28 58 28 88 28 v44h-352z"
          />
          <path
            id="gentle-wave2"
            d="M-160 54c40 0 58-24 88-24s58 24 88 24
               58-24 88-24 58 24 88 24 v44h-352z"
          />
          <path
            id="gentle-wave3"
            d="M-160 54c35 0 60-26 90-26s60 26 90 26
               60-26 90-26 60 26 90 26 v44h-352z"
          />
          <path
            id="gentle-wave4"
            d="M-160 54c32 0 62-22 92-22s62 22 92 22
               62-22 92-22 62 22 92 22 v44h-352z"
          />
          <path
            id="gentle-wave5"
            d="M-160 54c38 0 60-25 90-35s60 45 90 35 60-25 90-35 60 45 90 35 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave1" x="50" y="0" fill="#ffffff70" />
          <use xlinkHref="#gentle-wave2" x="55" y="3" fill="#ffffff50" />
          <use xlinkHref="#gentle-wave3" x="60" y="5" fill="#ffffff30" />
          <use xlinkHref="#gentle-wave4" x="65" y="7" fill="#ffffff20" />
        </g>
        <use xlinkHref="#gentle-wave5" x="70" y="9" fill="#ffffff" />
      </svg>
    </div>
  );
}