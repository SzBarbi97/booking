import { HotelServiceListProps } from '../../model/interfaces/props';
import { HotelService } from '../HotelService/HotelService';
import styles from './HotelServiceList.module.scss';

export function HotelServiceList({ services }: HotelServiceListProps) {
  return (
    <div className={styles.hotelServiceList}>
      {services.map((service) => (
        <HotelService key={service} service={service} />
      ))}
    </div>
  );
}
