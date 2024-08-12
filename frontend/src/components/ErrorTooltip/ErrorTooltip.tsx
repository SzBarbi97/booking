import ErrorIcon from '@mui/icons-material/Error';
import { IconButton, Tooltip } from '@mui/material';
import { ErrorTooltipProps } from '../../model/interfaces/props';
import { cn } from '../../utils';
import styles from './ErrorTooltip.module.scss';

export function ErrorTooltip({ errorMessage, showErrorMessage, className }: ErrorTooltipProps) {
  if (!showErrorMessage) {
    return null;
  }

  return (
    <Tooltip className={cn(styles.errorTooltip, className)} title={errorMessage}>
      <IconButton>
        <ErrorIcon />
      </IconButton>
    </Tooltip>
  );
}
