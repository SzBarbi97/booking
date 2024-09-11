import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Rating } from '@mui/material';
import { HotelListDefaultViewProps } from '../../model/interfaces/props';
import { formatNumberByThousand } from '../../utils/format';
import styles from './HotelListDefaultView.module.scss';

export function HotelListDefaultView({ hotels }: HotelListDefaultViewProps) {
  return (
    <div className={styles.hotelListContainer}>
      {hotels.map((hotel) => (
        <Link key={hotel.id} to={hotel.id}>
          <Card className={styles.hotelCard}>
            <CardMedia component="img" height="250" src={hotel.mainImageUrl} alt={hotel.title} />

            <p className={styles.hotelPrice}>Szoba: {formatNumberByThousand(hotel.price)} Ft-tól</p>

            <CardContent className={styles.cardContent}>
              <h3 className="margin-0">
                {hotel.title} <Rating className={styles.rating} value={hotel.rating} readOnly />
              </h3>
              <p className="margin-0">{hotel.country}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
