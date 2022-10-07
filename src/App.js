import './App.css';
import Accelerated from './Components/Accelerated/Accelerated';
import SecondDisplay from './Components/SecondDisplay/SecondDisplay';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import TimeFrames from './Components/TimeFrames';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <TimeFrames/>
     <Accelerated/>
     <SecondDisplay/>
     <ShowDetails/>
    </div>
  );
}

export default App;
