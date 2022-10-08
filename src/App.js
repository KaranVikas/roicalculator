import {useState} from 'react'

import './App.css';
import Accelerated from './Components/Accelerated/Accelerated';
import SecondDisplay from './Components/SecondDisplay/SecondDisplay';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import TimeFrames from './Components/TimeFrames';
import Header from './Components/Header/Header';

function App() {
  const [timeFrame, setTimeFrames] = useState("1day")
  const [accelerate, setAccelerate ] = useState("tier4")
  const [balance, setBalance] = useState("usebalance")
  const [apply, setApply] = useState("")
  return (
    <div className="App">
     <Header balance={balance} setBalance={setBalance}/>
     <TimeFrames timeFrame={timeFrame} setTimeFrames={setTimeFrames}/>
     <Accelerated accelerate={accelerate} setAccelerate={setAccelerate} />
     <SecondDisplay apply={apply} setApply={setApply} />
     <ShowDetails />
    </div>
  );
}

export default App;
