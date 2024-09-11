import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { HotelListProps } from '../../model/interfaces/props';
import { HotelListDefaultView } from '../HotelListDefaultView/HotelListDefaultView';
import { HotelListListView } from '../HotelListListView/HotelListListView';
import styles from './HotelList.module.scss';

export function HotelList({ hotels }: HotelListProps) {
  const [view, setView] = useState('default');

  const hotelListView = (event: React.MouseEvent<HTMLElement>, newView: string | null) => {
    if (newView) {
      setView(newView);
    }
  };

  return (
    <div className={styles.hotelListContainer}>
      <ToggleButtonGroup value={view} exclusive onChange={hotelListView} className={styles.toggleButtonGroup}>
        <ToggleButton value="default" className={styles.toggleButton}>
          Rács
        </ToggleButton>
        <ToggleButton value="list" className={styles.toggleButton}>
          Lista
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'default' ? <HotelListDefaultView hotels={hotels} /> : <HotelListListView hotels={hotels} />}
    </div>
  );
}
