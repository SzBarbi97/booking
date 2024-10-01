import { Box, CircularProgress } from '@mui/material';
import { UserRatingProps } from '../../model/interfaces/props';
import styles from './UserRating.module.scss';

export function UserRating({ userRating, userRatingNumber }: UserRatingProps) {
  let userRatingClassName;
  if (userRating >= 9) {
    userRatingClassName = styles.userRatingExcellent;
  } else if (userRating >= 8) {
    userRatingClassName = styles.userRatingVeryGood;
  } else if (userRating >= 7) {
    userRatingClassName = styles.userRatingGood;
  } else if (userRating >= 6) {
    userRatingClassName = styles.userRatingPleasing;
  } else {
    userRatingClassName = styles.userRatingNotGood;
  }

  return (
    <div className={styles.userRatingContainer}>
      <p className={styles.userRatingNumber}>{userRatingNumber} értékelés</p>

      <div className={styles.circularProgressContainer}>
        <Box className={styles.circularProgressBox}>
          <CircularProgress className={userRatingClassName} variant="determinate" value={userRating * 10} />
          <Box className={styles.circularProgressNumberBox}>
            <p>{userRating}</p>
          </Box>
        </Box>
      </div>
    </div>
  );
}
