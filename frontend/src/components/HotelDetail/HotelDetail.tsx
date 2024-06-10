import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HotelDetailProps } from '../../model/interfaces/props';
import { HotelDescription } from '../HotelDescription/HotelDescription';
import { HotelServiceList } from '../HotelServiceList/HotelServiceList';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Map } from '../Map/Map';
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

      <div className={styles.galleryAndMapContainer}>
        <ImageGallery mainImageUrl={hotel.mainImageUrl} imageUrls={hotel.imageUrls} />
        <Map className={styles.hotelMap} coordinate={hotel.coordinate} popupDescription={`${hotel.title} - ${hotel.location}`} />
      </div>


      <HotelDescription hotel={hotel} />

      <HotelServiceList services={hotel.services} />
    </div>
  );
}
