import { useEffect, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'photoswipe/style.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Loading from './common/Loading';

interface GalleryImage {
	original: string;
	thumbnail: string;
	originalAlt: string;
	thumbnailAlt: string;
	width: number;
	height: number;
}

const bucketUrl = 'https://kr.object.ncloudstorage.com/gandi-cdn/pic';
const imageCount = 30;

const imageUrls = Array.from({ length: imageCount }, (_, i) => {
	const fileName = `wd${i + 1}.jpg`;
	return {
		src: `${bucketUrl}/${fileName}`,
		alt: `wd${i + 1}`,
	};
});

export default function CustomGallery() {
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadImages = async () => {
			const loaded = await Promise.all(
				imageUrls.map((img) => {
					return new Promise((resolve) => {
						const image = new Image();
						image.src = img.src;
						image.onload = () => {
							resolve({
								original: img.src,
								thumbnail: img.src,
								originalAlt: img.alt,
								thumbnailAlt: img.alt,
								width: image.naturalWidth,
								height: image.naturalHeight,
							});
						};
					});
				})
			);
			setImages(loaded as GalleryImage[]);
			setLoading(false);
		};

		loadImages();
	}, []);

	const renderItem = (item: ReactImageGalleryItem) => {
		const galleryItem = item as GalleryImage;
		return (
			<Item
				original={galleryItem.original}
				thumbnail={galleryItem.thumbnail}
				width={galleryItem.width}
				height={galleryItem.height}
				alt={galleryItem.originalAlt}
			>
				{({ ref, open }) => (
					<img
						ref={ref as React.Ref<HTMLImageElement>}
						onClick={open}
						src={galleryItem.original}
						alt={galleryItem.originalAlt}
						className="object-cover w-full aspect-10/11"
					/>
				)}
			</Item>
		);
	};

	return (
		<section className="relative w-full aspect-10/11">
			{loading ? (
				<div className="flex items-center justify-center w-full aspect-10/11">
					<Loading />
				</div>
			) : (
				<Gallery
					options={{
						zoom: false,
						pinchToClose: false,
						wheelToZoom: false,
						doubleTapAction: false,
					}}
				>
					<ImageGallery
						items={images}
						showPlayButton={false}
						showFullscreenButton={false}
						renderItem={renderItem}
					/>
				</Gallery>
			)}
		</section>
	);
}
