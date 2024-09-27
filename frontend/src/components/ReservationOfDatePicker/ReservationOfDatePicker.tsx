import { useMemo, useState } from 'react';
import { FormControl } from '@mui/material';
import { DateValidationError, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { ReservationOfDatePickerProps } from '../../model/interfaces/props';
import { ErrorTooltip } from '../ErrorTooltip/ErrorTooltip';
import styles from './ReservationOfDatePicker.module.scss';

export function ReservationOfDatePicker({ arrivalDateDefault, exitDateDefault }: ReservationOfDatePickerProps) {
  const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(arrivalDateDefault || null);
  const [exitDate, setExitDate] = useState<Dayjs | null>(exitDateDefault || null);
  const [exitDateError, setExitDateError] = useState<DateValidationError | null>(null);

  const exitMinDate = arrivalDate ? arrivalDate.add(1, 'day') : dayjs().add(1, 'day');

  const exitDateErrorMessage = useMemo(() => {
    switch (exitDateError) {
      case 'minDate': {
        return 'A távozás dátuma nem lehet korábbi vagy egyenlő az érkezés dátumával.';
      }
      default: {
        return '';
      }
    }
  }, [exitDateError]);

  return (
    <>
      <FormControl className={styles.dateInput}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Érkezés"
            name="arrival-date"
            minDate={dayjs()}
            value={arrivalDate}
            onChange={setArrivalDate}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl className={styles.dateInput}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Távozás"
            name="exit-date"
            minDate={exitMinDate}
            value={exitDate}
            onChange={setExitDate}
            onError={(newError) => setExitDateError(newError)}
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>

        <ErrorTooltip
          className={styles.errorTooltip}
          errorMessage={exitDateErrorMessage}
          showErrorMessage={!!exitDateErrorMessage}
        />
      </FormControl>
    </>
  );
}
