import React from "react";
import styles from './styles.module.scss'

type DateType = 'day' | 'month' | 'year';

interface DateResultProps {
  type: DateType;
  date: number;
}

const DateResult: React.FC<DateResultProps> = ({ date, type }) => {
  return (
    <div className={styles['date-result']}>
      <span className={styles['date-result-value']}>
        {date}
      </span>
      {type}
    </div>
  );
};

export default DateResult;