import { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';

const bucketUrl = 'https://kr.object.ncloudstorage.com/gandi-cdn/pic';
const imageCount = 34;

const images = Array.from({ length: imageCount }, (_, i) => {
	const fileName = `wd${i + 1}.jpg`;
	return {
		original: `${bucketUrl}/${fileName}`,
		thumbnail: `${bucketUrl}/${fileName}`,
		originalAlt: `ori_${i + 1}`,
		thumbnailAlt: `thumb_${i + 1}`,
	};
});

export default function Gallery() {
	const ref = useRef<any>(null);

	const onClickHandler = () => {
		const activeSlide = document.querySelector('.image-gallery-slide.center') as HTMLElement;
		const label = activeSlide?.getAttribute('aria-label');
		const index = label ? parseInt(label.split(' ')[1]) - 1 : 0;

		ref.current?.openGallery(index);
	}

	return (
		<section>
			<div onClick={onClickHandler}>
				<ImageGallery
					items={images}
					showPlayButton={false}
					showFullscreenButton={false}
				/>
			</div>
			<LightGallery
				dynamic
				dynamicEl={images.map((img) => ({
					src: img.original,
					thumb: img.thumbnail,
					subHtml: img.originalAlt,
				}))}
				plugins={[lgZoom]}
				closable={true}
				ref={ref}
			/>

		</section>
	);
}