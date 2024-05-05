import React, { useState, useEffect } from 'react';
import CardUi from './components/CardUi/CardUi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import moment from 'moment';
import './App.css'; 

moment().format();

const options = [
  'Time zone India (GMT+5:30)', 'Time zone Brussels, Belgium (GMT+2)'
];

const App = () => {
  const [timezone, setTimezone] = useState(options[0])
  const [weekNum,setWeekNum] = useState(0);
  const handlePrevClick = () => {
    setWeekNum(weekNum - 1)
  };
  const handleNextClick = () => {
    setWeekNum(weekNum + 1)
  };

  useEffect(() => {
    console.log(timezone);
  }, [timezone])


  return (
    <div className="App">
      <div className='header'>
        <div className="prvbut">
          <button type="button" onClick={handlePrevClick}>
            Previous Week
          </button>
        </div>
        <div className="dateHeader">
          {moment().format(" Do MMMM  YYYY")}
        </div>
        <div className="nextbut">
          <button type="button" onClick={handleNextClick}>
            Next Week
          </button>
        </div>
      </div>
      <div className="dropdown">
        <Dropdown options={options} onChange={(val) => setTimezone(val.label)} value={timezone} placeholder="Select a timezone" />
      </div>
      <div className="calendar" >
        <CardUi week = {weekNum} />
      </div>
    </div>
  );
};

export default App;
