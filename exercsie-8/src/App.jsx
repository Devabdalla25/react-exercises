import {useState,useEffect} from 'react'

const App = () => {
   const [initialTime, setInitialTime] = useState(30);
  const [leftTime, setLeftTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
    let timerid;
    if (isRunning && leftTime > 0) {
      timerid = setInterval(() => {
        setLeftTime((prev) => prev - 1);
      }, 1000);
    }
    
  
    return () => clearInterval(timerid);
  }, [isRunning,leftTime]);

  const handleStart=()=>{
    setIsRunning(true)
  }
  const handleStop=()=>{
    setIsRunning(false)
  }
  const handleReset=()=>{
    setIsRunning(false)
    setInitialTime(initialTime)
  }
   const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setLeftTime(value);
    setIsRunning(false);
  };
  return (
    <div>
            <h1>Countdown Timer</h1>
      <h1>Set Time (seconds): <input type="number" value={initialTime} onChange={handleInputChange}/></h1>
      <h1>Time Left :{leftTime} seconds</h1>
      <button disabled={isRunning || leftTime === 0}  onClick={handleStart}>Start</button>
      <button disabled={!isRunning  || leftTime === 0} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Resset</button>
    </div>
  )
}

export default App
