import Slider from 'react-slick';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { GalleryImage } from '@components/gallery/CustomGallery.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  images: GalleryImage[];
  id: string;
  onClose?: () => void;
};

export default function ImageDetailSlider({ images, id, onClose }: Props) {
  const initialIndex = images.findIndex(img => img.alt === id);

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
    <div className="w-full h-screen flex justify-center items-center bg-white">
      {/*<motion.button*/}
      {/*  whileTap={{ scale: 0.9 }}*/}
      {/*  className="absolute -top-10 right-0 z-100"*/}
      {/*  onClick={onClose}*/}
      {/*>*/}
      {/*  <IoMdClose size={35} color="white" />*/}
      {/*</motion.button>*/}
      {/*<Slider {...settings}>*/}
      {/*  {images.map((img, idx) => (*/}
      {/*    <img*/}
      {/*      key={idx}*/}
      {/*      src={img.src}*/}
      {/*      alt={img.alt}*/}
      {/*      className="max-h-[60vh] max-w-full"*/}
      {/*      loading="eager"*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</Slider>*/}
      <div className='w-full bg-white h-[300px] z-100'></div>
    </div>
  );
}