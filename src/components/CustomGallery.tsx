import { useEffect, useState } from 'react';
import clsx from 'clsx';

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

  return (
    <section className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x w-full px-3">
      <div className="grid grid-rows-2 gap-2 mb-1 grid-flow-col min-w-max">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={clsx(
              'block rounded-lg bg-[#eee] flex-none object-cover w-[180px]',
              img.isLandscape ? 'h-[110px]' : 'h-[220px]',
            )}
            loading="lazy"
          />
        ))}
      </div>

    </section>
  );
}