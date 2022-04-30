import './App.css';
import dateService from '../../services/dateService';
import HeavenlyBody from '../HeavenlyBody/HeavenlyBody';
import Field from '../field/Field';
import Clouds from '../clouds/Clouds';
import React, {useEffect, useState} from 'react';

function App() {
  const {currentTime, secondsSinceMidnightTime, dayPercentage, heightPercentage} = dateService();
  const [getTime, setTime] = useState(0);
  const updater = () => {
    setTimeout(() =>{
      setTime(getTime + 1);
    }, 10000);
  };

  updater();

  return (
    <div className="App">
      <HeavenlyBody 
      dayProgress={dayPercentage()}
      xCoord={dayPercentage()}
      yCoord={heightPercentage()}/>
      <Clouds dayProgress={dayPercentage()}/>
      <Field dayProgress={dayPercentage()}/>
    </div>
  );
}

export default App;
