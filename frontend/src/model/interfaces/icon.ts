import { SvgIcon } from '@mui/material';

export type MuiIconType = typeof SvgIcon;

export interface ServiceIcon {
  ServiceIcon: MuiIconType;
  serviceName: string;
}
