import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  setDay,
} from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const handleCreateEvent = () => {
    setVisible(true);
  };

  const handleTodayDate = () => {
    setWeekStartDate(new Date());
  };

  const handleLeft = () => {
    setWeekStartDate(new Date(setDay(weekStartDate, false)));
  };

  const handleRight = () => {
    setWeekStartDate(new Date(setDay(weekStartDate, true)));
  };

  const handleCloseModalEvent = () => {
    setVisible(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <>
      <Header
        onCreateEvent={handleCreateEvent}
        onTodayDate={handleTodayDate}
        onPrevMonth={handleLeft}
        onNextMonth={handleRight}
        weekDates={weekDates}
      />
      <Calendar
        weekDates={weekDates}
        visible={visible}
        onClose={handleCloseModalEvent}
      />
    </>
  );
};

export default App;
