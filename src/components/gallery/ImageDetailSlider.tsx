import Slider from 'react-slick';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { GalleryImage } from '@components/gallery/CustomGallery.tsx';

type Props = {
  images: GalleryImage[];
  initialIndex: number;
  onClose?: () => void;
};

export default function ImageDetailSlider({ images, initialIndex, onClose }: Props) {
  const settings = {
    initialSlide: initialIndex,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    dots: false,
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute -top-10 right-0 z-100"
        onClick={onClose}
      >
        <IoMdClose size={35} color="white" />
      </motion.button>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center items-center h-full">
            <img
              src={img.src}
              alt={img.alt}
              className="max-h-[80vh] max-w-full min-h-[300px]"
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}