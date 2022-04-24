import './App.css';
import dateService from '../../services/dateService';
import HeavenlyBody from '../HeavenlyBody/HeavenlyBody';
import Field from '../field/Field';
import Clouds from '../clouds/Clouds';

function App() {
  const {currentTime, secondsSinceMidnightTime, dayPercentage, heightPercentage} = dateService();
  return (
    <div className="App">
      {/* <span>
      X: {dayPercentage()}%
      Y: {heightPercentage()}%
      </span> */}
      <HeavenlyBody 
      xCoord={dayPercentage()}
      yCoord={heightPercentage()}/>
      <Clouds/>
      <Field/>
    </div>
  );
}

export default App;
