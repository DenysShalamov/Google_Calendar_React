import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({
  dayStart,
  dataDay,
  dayEvents,
  fetchEvents,
  setModalVisibility,
  modalVisibility,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div
      className="calendar__day "
      data-day={dataDay}
      data-month={dayStart.getMonth()}
    >
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            setModalVisibility={setModalVisibility}
            modalVisibility={modalVisibility}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            dayStart={dayStart}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  dayStart: PropTypes.object.isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  setModalVisibility: PropTypes.func.isRequired,
  modalVisibility: PropTypes.bool.isRequired,
};
