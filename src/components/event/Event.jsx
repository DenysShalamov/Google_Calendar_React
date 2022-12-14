import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { deleteEvent } from '../../gateway/gateWay';
import { timeBeforeRemoveIsValid } from '../../utils/validation';
import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  eventId,
  fetchEvents,
  dateFrom,
}) => {
  const [deleteBtnVisibility, setDeleteBtnVisibility] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const handleEventState = () => {
    if (timeBeforeRemoveIsValid(dateFrom)) {
      alert('You can not delete event less than 15 minutes before it starts!');
      return;
    }

    deleteEvent(eventId).then(() => fetchEvents());
  };

  const handleDeleteBtn = (e) => {
    e.stopPropagation();

    setDeleteBtnVisibility(!deleteBtnVisibility);
  };
  return (
    <>
      <div style={eventStyle} className="event" onClick={handleDeleteBtn}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {deleteBtnVisibility && (
          <>
            <div className="overlay"></div>
            <button className="delete-event-btn" onClick={handleEventState}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Event;

Event.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
  dateFrom: PropTypes.object.isRequired,
};
