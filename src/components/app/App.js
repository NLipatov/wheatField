import './App.css';
import dateService from '../../services/dateService';
import HeavenlyBody from '../HeavenlyBody/HeavenlyBody';
import Field from '../field/Field';
import Clouds from '../clouds/Clouds';

function App() {
  const {currentTime, secondsSinceMidnightTime, dayPercentage, heightPercentage} = dateService();
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
