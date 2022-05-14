import './App.css';
import dateService from '../../services/dateService';
import HeavenlyBody from '../HeavenlyBody/HeavenlyBody';
import Field from '../field/Field';
import Clouds from '../clouds/Clouds';
import TimeBadge from '../timeBadge/TimeBadge';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import React, {useEffect, useState, useRef} from 'react';

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

  const hideLoadingScreen = useRef(null);

  const fieldImageLoaded = () => {
    console.log('field image was loaded');
    hideLoadingScreen.current();
  }


  return (
    <div className="App">
      <LoadingScreen
        hideLoadingScreen={hideLoadingScreen}/>
      <TimeBadge 
        CurrentTime={currentTime()}/>

      <HeavenlyBody 
        progressObject={progressObject}/>

      <Clouds 
        dayProgress={progressObject.progress}/>

      <Field 
        dayProgress={progressObject.progress}
        fieldImageLoaded={fieldImageLoaded}/>
    </div>
  );
}

export default App;
