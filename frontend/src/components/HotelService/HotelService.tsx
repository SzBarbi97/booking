import { MuiIconType } from '../../model/interfaces/icon';
import { HotelServiceProps } from '../../model/interfaces/props';
import { getServiceIcon } from '../../utils/icon';
import styles from './HotelService.module.scss';

export function HotelService({ service }: HotelServiceProps) {
  const serviceIcon = getServiceIcon(service);

  if (!serviceIcon) {
    return null;
  }

  const ServiceIcon: MuiIconType = serviceIcon.ServiceIcon;
  const serviceName: string = serviceIcon.serviceName;

  return (
    <div className={styles.hotelService}>
      <ServiceIcon className={styles.serviceIcon} />
      <p className={styles.serviceName}>{serviceName}</p>
    </div>
  );
}
