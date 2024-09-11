import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, CircularProgress, Rating } from '@mui/material';
import { HotelListListViewItemProps, HotelListListViewProps } from '../../model/interfaces/props';
import { formatNumberByThousand } from '../../utils/format';
import styles from './HotelListListView.module.scss';
import { HotelService } from '../HotelService/HotelService';

export function HotelListListView({ hotels }: HotelListListViewProps) {
  return (
    <div className={styles.hotelListContainer}>
      {hotels.map((hotel) => (
        <HotelListListViewItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

function HotelListListViewItem({ hotel }: HotelListListViewItemProps) {
  let userRatingClassName;
  if (hotel.userRating >= 9) {
    userRatingClassName = styles.userRatingExcellent;
  } else if (hotel.userRating >= 8) {
    userRatingClassName = styles.userRatingVeryGood;
  } else if (hotel.userRating >= 7) {
    userRatingClassName = styles.userRatingGood;
  } else if (hotel.userRating >= 6) {
    userRatingClassName = styles.userRatingPleasing;
  } else {
    userRatingClassName = styles.userRatingNotGood;
  }

  return (
    <Link key={hotel.id} to={hotel.id}>
      <Card className={styles.hotelCard}>
        <CardMedia className={styles.cardMedia} component="img" src={hotel.mainImageUrl} alt={hotel.title} />

        <CardContent className={styles.cardContent}>
          <div className={styles.userRatingContainer}>
            <p className={styles.userRatingNumber}>{hotel.userRatingNumber} értékelés</p>

            <div className={styles.circularProgressContainer}>
              <Box className={styles.circularProgressBox}>
                <CircularProgress className={userRatingClassName} variant="determinate" value={hotel.userRating * 10} />
                <Box className={styles.circularProgressNumberBox}>
                  <p>{hotel.userRating}</p>
                </Box>
              </Box>
            </div>
          </div>

          <h3>
            {hotel.title} <Rating className={styles.rating} value={hotel.rating} readOnly />
          </h3>
          <p>{hotel.country}</p>

          <div>
            {hotel.services.map((service) => (
              <HotelService key={service} service={service} />
            ))}
          </div>

          <div className={styles.hotelPriceInformationContainer}>
            <p>1 éjszaka / 2 felnőtt</p>
            <p className={styles.hotelPrice}>Szoba: {formatNumberByThousand(hotel.price)} Ft-tól</p>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
}
