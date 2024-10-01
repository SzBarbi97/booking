import { FormEvent, useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ParamKeyValuePair } from 'react-router-dom/dist/dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { getHotelCountries } from '../../api/hotel';
import { useMobileView } from '../../hooks';
import { CountryPickerProps, NumberOfAdultsProps, NumberOfChildrenProps } from '../../model/interfaces/props';
import { ErrorTooltip } from '../ErrorTooltip/ErrorTooltip';
import { ReservationOfDatePicker } from '../ReservationOfDatePicker/ReservationOfDatePicker';
import styles from './HotelSearchForm.module.scss';

export function HotelSearchForm() {
  const navigate = useNavigate();

  const mobileView = useMobileView();
  const [showSearch, setShowSearch] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);

  const [searchParams] = useSearchParams();

  const countrySearchParam = searchParams.get('country');
  const arrivalDateSearchParam = searchParams.get('arrivalDate');
  const exitDateSearchParam = searchParams.get('exitDate');
  const adultsSearchParam = searchParams.get('numberOfAdults');
  const childrenSearchParam = searchParams.get('numberOfChildren');

  useEffect(() => {
    getHotelCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const queryParams: ParamKeyValuePair[] = [];
    const country = formData.get('country');
    const arrivalDate = formData.get('arrival-date');
    const exitDate = formData.get('exit-date');
    const numberOfAdults = formData.get('number-of-adults');
    const numberOfChildren = formData.get('number-of-children');

    if (country) {
      queryParams.push(['country', country.toString()]);
    }

    if (arrivalDate) {
      queryParams.push(['arrivalDate', arrivalDate.toString()]);
    }

    if (exitDate) {
      queryParams.push(['exitDate', exitDate.toString()]);
    }

    if (numberOfAdults) {
      queryParams.push(['numberOfAdults', numberOfAdults.toString()]);
    }

    if (numberOfChildren) {
      queryParams.push(['numberOfChildren', numberOfChildren.toString()]);
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
            <CountryPicker countries={countries} countryDefault={countrySearchParam || undefined} />

            <ReservationOfDatePicker
              arrivalDateDefault={arrivalDateSearchParam ? dayjs(arrivalDateSearchParam) : undefined}
              exitDateDefault={exitDateSearchParam ? dayjs(exitDateSearchParam) : undefined}
            />

            <NumberOfAdultsPicker numberOfAdultsDefault={adultsSearchParam ? adultsSearchParam : undefined} />

            <NumberOfChildrenPicker numberOfChildrenDefault={childrenSearchParam ? childrenSearchParam : undefined} />

            <Button className={styles.searchButton} sx={{ minWidth: 150 }} type="submit" variant="contained">
              Keresés
            </Button>
          </form>
        </div>
      ) : null}
    </>
  );
}

function CountryPicker({ countries, countryDefault }: CountryPickerProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryDefault || '');

  return (
    <>
      <FormControl className={styles.country}>
        <InputLabel id="country-label">Helyszín</InputLabel>
        <Select
          name="country"
          labelId="country-label"
          label="Helyszín"
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}>
          <MenuItem className={styles.countryMenuItem} value="" />
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

function NumberOfAdultsPicker({ numberOfAdultsDefault }: NumberOfAdultsProps) {
  const [adultsNumber, setAdultsNumber] = useState(numberOfAdultsDefault || '');

  const numberOfAdultsErrorMessage = parseInt(adultsNumber) < 0 ? 'A felnőttek száma nem lehet kisebb 0-nál.' : '';

  return (
    <>
      <FormControl className={styles.numberInput}>
        <TextField
          name="number-of-adults"
          label="Felnőttek"
          type="number"
          value={adultsNumber}
          error={!!numberOfAdultsErrorMessage}
          onChange={(event) => setAdultsNumber(event.target.value)}
        />

        <ErrorTooltip
          className={styles.errorTooltip}
          errorMessage={numberOfAdultsErrorMessage}
          showErrorMessage={!!numberOfAdultsErrorMessage}
        />
      </FormControl>
    </>
  );
}

function NumberOfChildrenPicker({ numberOfChildrenDefault }: NumberOfChildrenProps) {
  const [childrenNumber, setChildrenNumber] = useState(numberOfChildrenDefault || '');

  const numberOfChildrenErrorMessage = parseInt(childrenNumber) < 0 ? 'A gyerekek száma nem lehet kisebb 0-nál.' : '';

  return (
    <>
      <FormControl className={styles.numberInput}>
        <TextField
          name="number-of-children"
          label="Gyerekek"
          type="number"
          value={childrenNumber}
          error={!!numberOfChildrenErrorMessage}
          onChange={(event) => setChildrenNumber(event.target.value)}
        />

        <ErrorTooltip
          className={styles.errorTooltip}
          errorMessage={numberOfChildrenErrorMessage}
          showErrorMessage={!!numberOfChildrenErrorMessage}
        />
      </FormControl>
    </>
  );
}
