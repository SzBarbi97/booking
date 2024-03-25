import { Card, CardContent, CardMedia } from '@mui/material';
import { HotelListProps } from '../../model/interfaces/props';
import { cn } from '../../utils';
import imageUrl from '../../assets/images/img.png';
import styles from './HotelList.module.scss';

export function HotelList({ hotels }: HotelListProps) {
  return (
    <div className={styles.hotelListContainer}>
      {hotels.map((hotel) => (
        <Card key={hotel.id} className={styles.hotelCard}>
          <CardMedia component="img" height="250" image={imageUrl} alt={hotel.title} />

          <p className={styles.hotelPrice}>Szoba: {hotel.price} Ft/Fő/Éj</p>

          <CardContent className={styles.cardContent}>
            <h3 className="margin-0">{hotel.country}</h3>
            <p className={cn(styles.hotelName, 'margin-0')}>{hotel.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
