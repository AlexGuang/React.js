import React ,{useState} from "react";



function App() {

  const[count,setCount] = useState(0);
  function decreace(){
 
    setCount(count - 1);
  }

  function increace(){
    setCount( count + 1);
   }
  return (
  <div className="container">
    
    <h1>{count}</h1>
    <button onClick={increace}>+</button>
    <button onClick={decreace}>-</button>
    
  </div>
  );
}

export default App;
