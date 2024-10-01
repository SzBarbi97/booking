import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useHotelListView } from '../../hooks/useHotelListView';
import { HotelListProps } from '../../model/interfaces/props';
import { HotelListGridView } from '../HotelListGridView/HotelListGridView';
import { HotelListListView } from '../HotelListListView/HotelListListView';
import styles from './HotelList.module.scss';

export function HotelList({ hotels }: HotelListProps) {
  const [view, setView] = useHotelListView();

  return (
    <div className={styles.hotelListContainer}>
      <ToggleButtonGroup value={view} exclusive onChange={setView} className={styles.toggleButtonGroup}>
        <ToggleButton value="grid" className={styles.toggleButton}>
          Rács
        </ToggleButton>
        <ToggleButton value="list" className={styles.toggleButton}>
          Lista
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'grid' ? <HotelListGridView hotels={hotels} /> : <HotelListListView hotels={hotels} />}
    </div>
  );
}
