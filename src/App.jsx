import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        weekDates={weekDates}
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
      />
    </>
  );
};

export default App;
