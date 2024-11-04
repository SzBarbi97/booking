import { createTheme } from '@mui/material';
import { huHU } from '@mui/x-date-pickers/locales';

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: 'rgb(102,76,40)',
      },
      secondary: {
        main: 'rgb(0,0,0)',
      },
    },
  },
  huHU
);
