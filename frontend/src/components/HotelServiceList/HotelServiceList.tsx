import { HotelServiceListProps } from '../../model/interfaces/props';
import { HotelService } from '../HotelService/HotelService';
import styles from './HotelServiceList.module.scss';

export function HotelServiceList({ services }: HotelServiceListProps) {
  return (
    <>
      <h3>Szolgáltatások</h3>

      <div className={styles.hotelServiceList}>
        {services.map((service) => (
          <HotelService key={service} service={service} />
        ))}
      </div>
    </>
  );
}
