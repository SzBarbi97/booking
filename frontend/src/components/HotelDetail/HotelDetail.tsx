import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HotelDetailProps } from '../../model/interfaces/props';
import { HotelDescription } from '../HotelDescription/HotelDescription';
import { HotelServiceList } from '../HotelServiceList/HotelServiceList';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import styles from './HotelDetail.module.scss';

export function HotelDetail({ hotel }: HotelDetailProps) {
  return (
    <div className={styles.hotelDetailContainer}>
      <div>
        <h1>{hotel.title}</h1>
        <p className={styles.location}>
          <LocationOnIcon />
          {hotel.location} ({hotel.country})
        </p>
      </div>

      <ImageGallery mainImageUrl={hotel.mainImageUrl} imageUrls={hotel.imageUrls} />
      <HotelDescription hotel={hotel} />
      <HotelServiceList services={hotel.services} />
    </div>
  );
}
