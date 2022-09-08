import React, { useEffect, useState } from 'react';
import './timeline.scss';

const TimeLine = () => {
  const [timeLine, setTimeLine] = useState(new Date().getMinutes());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLine(new Date().getMinutes());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timeLine]);

  const styles = {
    marginTop: new Date().getHours() * 60 + new Date().getMinutes(),
  };

  return (
    <div className="time__line" style={styles}>
      <div className="time__circle"></div>
    </div>
  );
};

export default TimeLine;
