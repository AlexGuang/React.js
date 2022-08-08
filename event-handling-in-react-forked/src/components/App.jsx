import React,{useState} from "react";





function App() {

const [headerText,setHeaderText] = useState("Hello");
const [isMouseOver,setIsmouseover] = useState(false);
function submitButton(){
  setHeaderText("Submited");
}
  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick = {submitButton} 
       onMouseOver ={()=>setIsmouseover(true)} 
       onMouseOut = {()=>setIsmouseover(false)}
       style ={{backgroundColor:isMouseOver? "black":"white"}}
       >Submit</button>
    </div>
  );
}

export default App;
