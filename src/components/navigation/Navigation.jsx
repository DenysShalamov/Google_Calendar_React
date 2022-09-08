import React from 'react';
import moment from 'moment';
import { days } from '../../utils/dateUtils.js';

const formatDate = (date) => moment(date).format('L');

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div key={Math.random()} className="calendar__day-label day-label">
          <span
            className={
              formatDate(dayDate) === formatDate(new Date())
                ? 'day-label__day-name day-label__day-name-today'
                : 'day-label__day-name'
            }
          >
            {days[dayDate.getDay()]}
          </span>
          <span
            className={
              formatDate(dayDate) === formatDate(new Date())
                ? 'day-label__day-number day-label__day-number-today'
                : 'day-label__day-number'
            }
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
