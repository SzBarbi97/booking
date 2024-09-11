import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SpaIcon from '@mui/icons-material/Spa';
import WifiIcon from '@mui/icons-material/Wifi';
import { MuiIconType } from '../../model/interfaces/icon';
import { HotelServiceProps } from '../../model/interfaces/props';
import styles from './HotelService.module.scss';

export function HotelService({ service }: HotelServiceProps) {
  let ServiceIcon: MuiIconType | null = null;
  let serviceName: string | null = null;

  switch (service) {
    case 'FREE_PARKING':
      ServiceIcon = LocalParkingOutlinedIcon;
      serviceName = 'Ingyenes parkolás';
      break;
    case 'FREE_WIFI':
      ServiceIcon = WifiIcon;
      serviceName = 'Ingyenes WiFi';
      break;
    case 'OWN_RESTAURANT':
      ServiceIcon = RestaurantIcon;
      serviceName = 'Saját étterem';
      break;
    case 'ANIMAL_FRIENDLY':
      ServiceIcon = PetsIcon;
      serviceName = 'Állatbarát';
      break;
    case 'NO_SMOKING':
      ServiceIcon = SmokeFreeIcon;
      serviceName = 'Nem dohányzó szoba';
      break;
    case 'BAR':
      ServiceIcon = LocalBarIcon;
      serviceName = 'Bár';
      break;
    case 'FITNESS_CENTER':
      ServiceIcon = FitnessCenterIcon;
      serviceName = 'Fitneszközpont';
      break;
    case 'WELLNESS_CENTER':
      ServiceIcon = SpaIcon;
      serviceName = 'Wellness központ';
      break;
  }

  return (
    <>
      {ServiceIcon ? (
        <>
          <div className={styles.hotelService}>
            <ServiceIcon className={styles.serviceIcon} />
            <p className={styles.serviceName}>{serviceName}</p>
          </div>
        </>
      ) : null}
    </>
  );
}
