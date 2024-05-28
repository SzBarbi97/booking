import { useCallback, useState } from 'react';
import { ImageGalleryProps } from '../../model/interfaces/props';
import { ImageGalleryModal } from '../ImageGalleryModal/ImageGalleryModal';
import styles from './ImageGallery.module.scss';

export function ImageGallery({ mainImageUrl, imageUrls }: ImageGalleryProps) {
  const [imageGalleryModalOpen, setImageGalleryModalOpen] = useState(false);

  const handleOpen = useCallback(() => setImageGalleryModalOpen(true), []);
  const handleClose = useCallback(() => setImageGalleryModalOpen(false), []);

  const additionalImageSize = imageUrls.length > 2 ? imageUrls.length - 2 : 0;
  const additionalImageUrls = imageUrls.slice(0, 2);

  return (
    <>
      <div className={styles.container} onClick={handleOpen}>
        <img className={styles.mainImage} src={mainImageUrl} alt={mainImageUrl} />

        <div className={styles.additionalImagesContainer}>
          {additionalImageUrls.map((imageUrl) => (
            <img key={imageUrl} className={styles.additionalImage} src={imageUrl} alt={imageUrl} />
          ))}

          {imageUrls.length > 2 ? (
            <div className={styles.additionalImageCountContainer}>
              <p>További képek: {additionalImageSize}</p>
            </div>
          ) : null}
        </div>
      </div>

      <ImageGalleryModal open={imageGalleryModalOpen} onClose={handleClose} imageUrls={[mainImageUrl, ...imageUrls]} />
    </>
  );
}
