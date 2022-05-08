import './App.css';
import dateService from '../../services/dateService';
import HeavenlyBody from '../HeavenlyBody/HeavenlyBody';
import Field from '../field/Field';
import Clouds from '../clouds/Clouds';
import TimeBadge from '../timeBadge/TimeBadge';
import React, {useEffect, useState} from 'react';

function App() {
  const {getProgressObject, getManualProgressObject, currentTime} = dateService();
  const [getTime, setTime] = useState(1);
  const updater = () => {
    setTimeout(() =>{
      setTime(getTime + 1);
    }, 10000);
  };

  const progressObject = getProgressObject(); 
  // const progressObject = getManualProgressObject(15); 

  updater();


  return (
    <div className="App">
      <TimeBadge CurrentTime={currentTime()}/>
      <HeavenlyBody 
      progressObject={progressObject}/>
      <Clouds dayProgress={progressObject.progress}/>
      <Field dayProgress={progressObject.progress}/>
    </div>
  );
}

export default App;
