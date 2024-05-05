import React, { useState, useEffect } from 'react';
import moment from 'moment';
import "./CardUi.css"
import { getDatesOfWeek } from '../../utils/dateutils';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Card = ({ day, date, timings, selected, onSelect }) => {
  console.log(date, moment().diff(moment(date), "days"));

  return (

    <div className={`card ${selected !== undefined ? 'selected' : ''} ${moment().isSame(date, 'day') ? "present" : null} ` } style={{width: "96vw", padding: 2}} >
      <div className="left-column">
        <p style={{ margin: "0px", fontWeight: "bold" }}>{day}</p>
        <p style={{ margin: "0px" }}>{moment(date).format("Do MMMM YYYY")}</p>
      </div>


      <div className="right-column">
        {moment().diff(moment(date), "days") <= 0 ? timings.map((time, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={selected === index}
                onChange={() => onSelect(day, index)}
              />
              {time}
            </label>
          </div>
        )) : "past"}
      </div>
    </div>
  );
};

const CardUi = ({ week }) => {

  const [selectedTimings, setSelectedTimings] = useState({});

  const handleSelect = (day, index) => {
    setSelectedTimings({ ...selectedTimings, [day]: index });
  };


  const [weekDates, setWeekDates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWeekDates(getDatesOfWeek(week))
  }, [week]);

  useEffect(() => {
    weekDates ? setIsLoading(false) : null
  }, [weekDates])

  return !isLoading && (
    <div className="card-series" style={{ height: "100%" }}>
      {days.map((day, index) => (
        <Card
          key={index}
          day={day}
          // date={index === currentDayIndex ? currentDateFormatted : ''}
          date={weekDates[index]}
          timings={Array.from({ length: 16 }, (_, i) => `${i + 8}:00 am`)}
          selected={selectedTimings[day]}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default CardUi;
