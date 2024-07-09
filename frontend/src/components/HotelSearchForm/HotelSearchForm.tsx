import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { ParamKeyValuePair } from 'react-router-dom/dist/dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { getHotelCountries } from '../../api/hotel';
import { useMobileView } from '../../hooks';
import styles from './HotelSearchForm.module.scss';

export function HotelSearchForm() {
  const navigate = useNavigate();

  const mobileView = useMobileView();
  const [showSearch, setShowSearch] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const tomorrow = dayjs().add(1, 'day');

  useEffect(() => {
    getHotelCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const queryParams: ParamKeyValuePair[] = [];
    const country = formData.get('select-country');
    if (country) {
      queryParams.push(['country', country.toString()]);
    }

    navigate({
      pathname: '/hotels',
      search: createSearchParams(queryParams).toString(),
    });
  };

  return (
    <>
      {mobileView ? (
        <div className={styles.mobileViewSearchButtonContainer}>
          <Button
            className={styles.mobileViewSearchButton}
            variant="contained"
            onClick={() => setShowSearch((prevState) => !prevState)}>
            Keresési beállítások {showSearch ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
        </div>
      ) : null}

      {!mobileView || showSearch ? (
        <div className={styles.bookingSearchFormContainer}>
          <form className={styles.bookingSearchForm} onSubmit={handleSubmit}>
            <FormControl className={styles.country} defaultValue={''}>
              <InputLabel id="country">Helyszín</InputLabel>
              <Select id="select-country" name="select-country" labelId="country" label="Helyszín">
                <MenuItem className={styles.countryMenuItem} value="" />
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={styles.dateInput} sx={{ minWidth: 150 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Érkezés" defaultValue={dayjs()} />
              </LocalizationProvider>
            </FormControl>

            <FormControl className={styles.dateInput} sx={{ minWidth: 150 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Távozás" defaultValue={tomorrow} />
              </LocalizationProvider>
            </FormControl>

            <FormControl className={styles.numberInput} sx={{ minWidth: 120 }}>
              <TextField id="number-of-adults" label="Felnőttek" type="number" />
            </FormControl>

            <FormControl className={styles.numberInput} sx={{ minWidth: 120 }}>
              <TextField id="number-of-children" label="Gyerekek" type="number" />
            </FormControl>

            <Button className={styles.searchButton} sx={{ minWidth: 150 }} type="submit" variant="contained">
              Keresés
            </Button>
          </form>
        </div>
      ) : null}
    </>
  );
}
