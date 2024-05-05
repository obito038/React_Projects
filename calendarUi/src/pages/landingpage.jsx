import React, { useState } from 'react';
import LandingPage from './landingpage';
import CardUi from './components/CardUi/CardUi';

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="App">
      {showCalendar ? <CardUi /> : <LandingPage handleClick={handleClick} />}
    </div>
  );
};

export default App;
