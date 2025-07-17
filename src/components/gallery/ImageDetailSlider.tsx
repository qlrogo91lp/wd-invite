import Slider from 'react-slick';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { GalleryImage } from '@components/gallery/CustomGallery.tsx';

type Props = {
  images: GalleryImage[];
  id: string;
  onClose?: () => void;
};

export default function ImageDetailSlider({ images, id, onClose }: Props) {
  const initialIndex = Math.max(0, images.findIndex((img) => img.alt === id));

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
    <div className="relative w-full h-screen">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute -top-10 right-0 z-100"
        onClick={onClose}
      >
        <IoMdClose size={35} color="white" />
      </motion.button>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center items-center w-full min-h-[300px] bg-white">
            <img
              src={img.src}
              alt={img.alt}
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}