import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal } from '@mui/material';
import { ImageGalleryModalProps } from '../../model/interfaces/props';
import styles from './ImageGalleryModal.module.scss';

export function ImageGalleryModal({ open, onClose, imageUrls }: ImageGalleryModalProps) {
  const [index, setIndex] = useState(0);
  const lastIndex = imageUrls.length - 1;

  const handleIndexDecrement = () => {
    setIndex((prevState) => (prevState - 1 > 0 ? prevState - 1 : 0));
  };

  const handleIndexIncrement = () => {
    setIndex((prevState) => (prevState + 1 < lastIndex ? prevState + 1 : lastIndex));
  };

  return (
    <Modal open={open}>
      <Box className={styles.box}>
        <div className={styles.boxHeader}>
          <IconButton className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className={styles.boxContent}>
          <IconButton className={styles.backButton} onClick={handleIndexDecrement} disabled={index === 0}>
            <ArrowBackIcon />
          </IconButton>

          <div className={styles.imageContainer}>
            <img src={imageUrls[index]} alt={imageUrls[index]} />
          </div>

          <IconButton className={styles.forwardButton} onClick={handleIndexIncrement} disabled={index === lastIndex}>
            <ArrowForwardIcon />
          </IconButton>
        </div>

        <div className={styles.boxFooter}>
          <p>
            {index + 1} / {imageUrls.length}
          </p>
        </div>
      </Box>
    </Modal>
  );
}
