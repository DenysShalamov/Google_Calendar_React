import React from 'react';
import moment from 'moment';
import Day from '../day/Day';
import TimeLine from '../TimeLine/TimeLine';

import './week.scss';

const Week = ({ weekDates, events, onDelete }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        // getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDelete={onDelete}
          >
            {moment(dayStart).format('LL') ===
              moment(new Date()).format('LL') && <TimeLine />}
          </Day>
        );
      })}
    </div>
  );
};

export default Week;
