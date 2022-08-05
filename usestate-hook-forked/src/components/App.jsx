import React ,{useStage} from "react";


function increace(){
  setCount( count + 1);
}


function decreace(){
 
  setCount(count - 1);
}


function App() {
  const [count,setCount] = useStage(0);
  return (
  <div >
    {}
    <h1>{count}</h1>
    <button onClick={increace}>+</button>
    <button onClick={decreace}>-</button>
  </div>
  );
}

export default App;
