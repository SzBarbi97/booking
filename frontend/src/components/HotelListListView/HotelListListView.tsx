import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Rating } from '@mui/material';
import { HotelListListViewItemProps, HotelListListViewProps } from '../../model/interfaces/props';
import { formatNumberByThousand } from '../../utils/format';
import { HotelServiceIcon } from '../HotelServiceIcon/HotelServiceIcon';
import { UserRating } from '../UserRating/UserRating';
import styles from './HotelListListView.module.scss';

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
  return (
    <Link key={hotel.id} to={hotel.id}>
      <Card className={styles.hotelCard}>
        <CardMedia className={styles.cardMedia} component="img" src={hotel.mainImageUrl} alt={hotel.title} />

        <CardContent className={styles.cardContent}>
          <UserRating userRating={hotel.userRating} userRatingNumber={hotel.userRatingNumber} />

          <h3>
            {hotel.title} <Rating className={styles.rating} value={hotel.rating} readOnly />
          </h3>
          <p>{hotel.country}</p>

          <div className={styles.hotelServiceIconAndPriceContainer}>
            <div>
              {hotel.services.map((service) => (
                <HotelServiceIcon key={service} service={service} />
              ))}
            </div>

            <div>
              <p>1 éjszaka / 2 felnőtt</p>
              <p className={styles.hotelPrice}>Szoba: {formatNumberByThousand(hotel.price)} Ft-tól</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
