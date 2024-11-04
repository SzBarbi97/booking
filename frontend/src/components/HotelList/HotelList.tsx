import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { FormControl, InputLabel, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useHotelListView } from '../../hooks/useHotelListView';
import { HotelListProps } from '../../model/interfaces/props';
import { HotelListGridView } from '../HotelListGridView/HotelListGridView';
import { HotelListListView } from '../HotelListListView/HotelListListView';
import styles from './HotelList.module.scss';

export function HotelList({ hotels }: HotelListProps) {
  const [view, setView] = useHotelListView();

  return (
    <div className={styles.hotelListContainer}>
      <div className={styles.hotelListOrderAndViewContainer}>
        <ToggleButtonGroup value={view} exclusive onChange={setView}>
          <ToggleButton value="list" className={styles.toggleButton}>
            Lista
          </ToggleButton>
          <ToggleButton value="grid" className={styles.toggleButton}>
            Rács
          </ToggleButton>
        </ToggleButtonGroup>

        <FormControl className={styles.order} size="small">
          <InputLabel id="hotel-list-order-label">Rendezés</InputLabel>
          <Select labelId="hotel-list-order-label" id="hotel-list-order" label="Rendezés">
            <MenuItem className={styles.orderMenuItem} value=" "></MenuItem>
            <MenuItem value="HOTEL_TITLE_ASC">Név szerint növekvő</MenuItem>
            <MenuItem value="HOTEL_TITLE_DESC">Név szerint csökkenő</MenuItem>
            <MenuItem value="HOTEL_RATING_ASC">Csillag szerint növekvő</MenuItem>
            <MenuItem value="HOTEL_RATING_DESC">Csillag szerint csökkenő</MenuItem>
            <MenuItem value="HOTEL_PRICE_ASC">Ár szerint növekvő</MenuItem>
            <MenuItem value="HOTEL_PRICE_DESC">Ár szerint csökkenő</MenuItem>
          </Select>
        </FormControl>
      </div>

      {hotels.length > 0 ? (
        view === 'grid' ? (
          <HotelListGridView hotels={hotels} />
        ) : (
          <HotelListListView hotels={hotels} />
        )
      ) : (
        <div className={styles.noResultFound}>
          <SentimentVeryDissatisfiedIcon className={styles.noResultFoundIcon} />
          <p className={styles.noResultFoundText}>Nincs a keresésnek megfelelő hotel.</p>
        </div>
      )}
    </div>
  );
}
