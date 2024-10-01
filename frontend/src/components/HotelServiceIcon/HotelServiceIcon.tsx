import { MuiIconType } from '../../model/interfaces/icon';
import { HotelServiceIconProps } from '../../model/interfaces/props';
import { getServiceIcon } from '../../utils/icon';
import styles from './HotelServiceIcon.module.scss';

export function HotelServiceIcon({ service }: HotelServiceIconProps) {
  const serviceIcon = getServiceIcon(service);

  if (!serviceIcon) {
    return null;
  }

  const ServiceIcon: MuiIconType = serviceIcon.ServiceIcon;

  return <ServiceIcon className={styles.hotelServiceIcon}/>;
}
