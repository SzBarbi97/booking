import { FormEvent, useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ParamKeyValuePair } from 'react-router-dom/dist/dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { getHotelCountries } from '../../api/hotel';
import { useMobileView } from '../../hooks';
import { ReservationOfDatePicker } from '../ReservationOfDatePicker/ReservationOfDatePicker';
import styles from './HotelSearchForm.module.scss';

export function HotelSearchForm() {
  const navigate = useNavigate();

  const mobileView = useMobileView();
  const [showSearch, setShowSearch] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const [searchParams] = useSearchParams();

  const countrySearchParam = searchParams.get('country');

  useEffect(() => {
    getHotelCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const queryParams: ParamKeyValuePair[] = [];
    const country = formData.get('select-country');
    const adults = formData.get('number-of-adults');
    const children = formData.get('number-of-children');
    const arrival = formData.get('arrival-date');
    const exit = formData.get('exit-date');

    if (country) {
      queryParams.push(['country', country.toString()]);
    }

    if (adults) {
      queryParams.push(['adults', adults.toString()]);
    }

    if (children) {
      queryParams.push(['children', children.toString()]);
    }

    if (arrival) {
      queryParams.push(['arrival', arrival.toString()]);
    }

    if (exit) {
      queryParams.push(['exit', exit.toString()]);
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
              <Select id="select-country" name="select-country" labelId="country" label="Helyszín" defaultValue="">
                <MenuItem className={styles.countryMenuItem} value="" />
                {countries.map((country) => (
                  <MenuItem key={country} value={country} selected={country === countrySearchParam}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <ReservationOfDatePicker />

            <FormControl className={styles.numberInput} sx={{ minWidth: 120 }}>
              <TextField id="number-of-adults" name="number-of-adults" label="Felnőttek" type="number" />
            </FormControl>

            <FormControl className={styles.numberInput} sx={{ minWidth: 120 }}>
              <TextField id="number-of-children" name="number-of-children" label="Gyerekek" type="number" />
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
