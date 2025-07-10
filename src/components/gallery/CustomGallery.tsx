import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Modal from '@components/common/Modal.tsx';
import ImageDetailItem from '@components/gallery/ImageDetailItem.tsx';
import { format } from 'date-fns';
import Lottie from 'lottie-react';
import lottieAnimation from '@assets/lottie/lottie-scroll.json';

const bucketUrl = 'https://kr.object.ncloudstorage.com/gandi-cdn/pic';
const imageCount = 20;

const imageUrls = Array.from({ length: imageCount }, (_, i) => {
  const today = new Date();
  const fileName = `wd${i + 1}.webp?date=${format(today, 'yyyy-MM-dd_HH:mm')}`;
  return {
    src: `${bucketUrl}/${fileName}`,
    alt: `wd${i + 1}`,
  };
});

function getColumns(images: GalleryImage[]) {
  return images.reduce<GalleryImage[][]>((columns, img, idx) => {
    const prev = images[idx - 1];
    if (
      img.isLandscape &&
      prev?.isLandscape &&
      columns[columns.length - 1]?.length === 1
    ) {
      // 이전 column에 추가
      columns[columns.length - 1].push(img);
    } else {
      // 새로운 column 생성
      columns.push([img]);
    }
    return columns;
  }, []);
}

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
  const [isPop, setIsPop] = useState(true);

  const columns = getColumns(images);

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

  const onClickGallery = () => {
    setIsPop(false);
  };

  return (
    <section
      className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x w-[440px] px-3"
      onClick={onClickGallery}
      onTouchStart={onClickGallery}
    >
      <div className="relative grid grid-rows-2 gap-2 mb-1 grid-flow-col min-w-max pr-3">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-2">
            {col.map((img, rowIdx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={clsx(
                  'block rounded-lg bg-[#eee] flex-none object-cover w-[180px]',
                  // landscape 2장 묶음이면 높이 반씩, 아니면 원래대로
                  col.length === 2
                    ? 'h-[110px]'
                    : img.isLandscape
                      ? 'h-[110px]'
                      : 'h-[220px]',
                )}
                loading="lazy"
                onClick={() => onClickImage(img, colIdx * 2 + rowIdx)}
              />
            ))}
          </div>
        ))}
        {isPop && (
          <div className="absolute top-2 left-2 w-[120px] h-[75px] bg-black/50 rounded-lg">
            <div className="relative w-full h-full">
              <Lottie animationData={lottieAnimation} loop className="w-[90px] h-[65px] scale-200" />
              <p className="absolute text-xs text-white bottom-1 left-0 right-0 text-center">밀어서 사진보기</p>
            </div>
          </div>
        )}
      </div>
      <Modal open={!!modalImage} onClose={() => setModalImage(null)}>
        {modalImage &&
          <ImageDetailItem
            imgSrc={modalImage.src}
            imgAlt={modalImage.alt}
            onPrev={prev ? onClickPrev : undefined}
            onNext={next ? onClickNext : undefined}
            onClose={() => setModalImage(null)}
          />}
      </Modal>
    </section>
  );
}