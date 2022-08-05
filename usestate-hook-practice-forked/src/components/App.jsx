import React ,{useState} from "react";

function App() {
  const [newTime,setTime] = useState(new Date().toLocaleTimeString());
  //let time = new Date().toLocaleTimeString();
  function getTime(){
    setTime(new Date().toLocaleTimeString())
  }
  const [newTimes,setTimes] = useState(new Date().toLocaleTimeString());
  function sayHi() {
    setTimes(new Date().toLocaleTimeString())
  }
  {setInterval(sayHi, 1000)}
//console.log(time);
  return (
    <div className="container">
      <h1>{newTime}</h1>
     

      <button onClick={getTime}>Get Time</button>
      <h1>{newTimes}</h1>
     
    </div>
  );
}

export default App;
