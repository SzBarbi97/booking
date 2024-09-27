import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button, Rating } from '@mui/material';
import { HotelDetailProps } from '../../model/interfaces/props';
import { HotelAttractions } from '../HotelAttractions/HotelAttractions';
import { HotelDescription } from '../HotelDescription/HotelDescription';
import { HotelServiceList } from '../HotelServiceList/HotelServiceList';
import { HotelSpokenLanguages } from '../HotelSpokenLanguages/HotelSpokenLanguages';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Map } from '../Map/Map';
import { UserRating } from '../UserRating/UserRating';
import styles from './HotelDetail.module.scss';

export function HotelDetail({ hotel }: HotelDetailProps) {
  return (
    <div className={styles.hotelDetailContainer}>
      <Link to="/hotels">
        <Button className={styles.hotelsNavigationButton} startIcon={<NavigateBeforeIcon />}>
          Főoldal
        </Button>
      </Link>

      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.hotelTitleAndRatingContainer}>
            <UserRating userRating={hotel.userRating} userRatingNumber={hotel.userRatingNumber} />

            <h1 className={styles.hotelTitle}>
              {hotel.title} <Rating value={hotel.rating} readOnly />
            </h1>
          </div>

          <p className={styles.location}>
            <LocationOnIcon />
            {hotel.location} ({hotel.country})
          </p>

          <ImageGallery mainImageUrl={hotel.mainImageUrl} imageUrls={hotel.imageUrls} />
        </div>

        <div>
          <HotelServiceList services={hotel.services} />
          <HotelSpokenLanguages languages={hotel.languages} />
          <HotelAttractions attractions={hotel.attractions} />
        </div>
      </div>

      <HotelDescription hotel={hotel} />

      <Map
        className={styles.hotelMap}
        coordinate={hotel.coordinate}
        popupDescription={`${hotel.title} - ${hotel.location}`}
      />
    </div>
  );
}
