import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Modal from '@components/common/Modal.tsx';
import ImageDetailItem from '@components/gallery/ImageDetailItem.tsx';

const bucketUrl = 'https://kr.object.ncloudstorage.com/gandi-cdn/pic';
const imageCount = 32;

const imageUrls = Array.from({ length: imageCount }, (_, i) => {
  const fileName = `wd${i + 1}.webp`;
  return {
    src: `${bucketUrl}/${fileName}`,
    alt: `wd${i + 1}`,
  };
});

type GalleryImage = {
  src: string;
  alt: string;
  isLandscape: boolean;
  width: number;
  height: number;
};

export default function CustomGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [next, setNext] = useState<number | null>(null);

  useEffect(() => {
    Promise.all(
      imageUrls.map(
        (img) =>
          new Promise<GalleryImage>((resolve) => {
            const image = new window.Image();
            image.src = img.src;
            image.onload = () => {
              resolve({
                ...img,
                isLandscape: image.width >= image.height,
                width: image.width,
                height: image.height,
              });
            };
            image.onerror = () => {
              resolve({
                ...img,
                isLandscape: false,
                width: 1,
                height: 2,
              });
            };
          }),
      ),
    ).then(setImages);
  }, []);

  const onClickImage = (image: GalleryImage, index: number,
  ) => {
    setPrev(index - 1 < 0 ? null : index - 1);
    setNext(index + 1 >= images.length ? null : index + 1);
    setModalImage(image);
  };

  const onClickPrev = () => {
    if (prev !== null) {
      setModalImage(images[prev]);
      setPrev(prev - 1 < 0 ? null : prev - 1);
      setNext(prev);
    }
  };

  const onClickNext = () => {
    if (next !== null) {
      setModalImage(images[next]);
      setPrev(next);
      setNext(next + 1 >= images.length ? null : next + 1);
    }
  };

  return (
    <section className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x w-full px-3 scrollbar-hide">
      <div className="grid grid-rows-2 gap-2 mb-1 grid-flow-col min-w-max">
        {images.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={clsx(
              'block rounded-lg bg-[#eee] flex-none object-cover w-[180px]',
              img.isLandscape ? 'h-[110px]' : 'h-[220px]',
            )}
            loading="lazy"
            onClick={() => onClickImage(img, index)}
          />
        ))}
      </div>
      <Modal open={!!modalImage} onClose={() => setModalImage(null)}>
        {modalImage &&
          <ImageDetailItem
            imgSrc={modalImage.src}
            imgAlt={modalImage.alt}
            onPrev={prev ? onClickPrev : undefined}
            onNext={next ? onClickNext : undefined}
          />}
      </Modal>
    </section>
  );
}