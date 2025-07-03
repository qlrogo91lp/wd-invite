import React, { useEffect, useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'photoswipe/style.css';
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

export default function CustomGallery2() {
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

  const row1: GalleryImage[] = [];
  const row2: GalleryImage[] = [];
  let toggle = true;

  images.forEach((img) => {
    if (toggle) row1.push(img);
    else row2.push(img);
    toggle = !toggle;
  });

  return (
    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x w-full">
      <div className="flex flex-col gap-2">
        {[row1, row2].map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-row gap-2 mb-1"
          >
            {row.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={clsx(
                  'block rounded-lg bg-[#eee] flex-none object-cover w-[200px]',
                  img.isLandscape ? 'h-[140px]' : 'h-[280px]',
                )}
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}