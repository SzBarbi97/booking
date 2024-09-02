import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button } from '@mui/material';
import { HotelDetailProps } from '../../model/interfaces/props';
import { HotelAttractions } from '../HotelAttractions/HotelAttractions';
import { HotelDescription } from '../HotelDescription/HotelDescription';
import { HotelServiceList } from '../HotelServiceList/HotelServiceList';
import { HotelSpokenLanguages } from '../HotelSpokenLanguages/HotelSpokenLanguages';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Map } from '../Map/Map';
import styles from './HotelDetail.module.scss';

export function HotelDetail({ hotel }: HotelDetailProps) {
  return (
    <div className={styles.hotelDetailContainer}>
      <Link to="/hotels">
        <Button className={styles.hotelsNavigationButton} startIcon={<NavigateBeforeIcon />}>
          Főoldal
        </Button>
      </Link>

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
      <HotelSpokenLanguages languages={hotel.languages} />
      <HotelAttractions attractions={hotel.attractions} />

      <Map
        className={styles.hotelMap}
        coordinate={hotel.coordinate}
        popupDescription={`${hotel.title} - ${hotel.location}`}
      />
    </div>
  );
}
