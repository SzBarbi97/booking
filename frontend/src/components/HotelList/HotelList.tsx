import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import { HotelListProps } from '../../model/interfaces/props';
import { cn } from '../../utils';
import styles from './HotelList.module.scss';

export function HotelList({ hotels }: HotelListProps) {
  return (
    <div className={styles.hotelListContainer}>
      {hotels.map((hotel) => (
        <Link key={hotel.id} to={hotel.id}>
          <Card className={styles.hotelCard}>
            <CardMedia component="img" height="250" src={hotel.mainImageUrl} alt={hotel.title} />

            <p className={styles.hotelPrice}>Szoba: {hotel.price} Ft/Éj</p>

            <CardContent className={styles.cardContent}>
              <h3 className="margin-0">{hotel.country}</h3>
              <p className={cn(styles.hotelName, 'margin-0')}>{hotel.title}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}