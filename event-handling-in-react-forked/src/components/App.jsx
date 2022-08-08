import React,{useState} from "react";





function App() {

const [headerText,setHeaderText] = useState("");
const [isMouseOver,setIsmouseover] = useState(false);
const [name,setName] = useState("");
function submitButton(){
  
  setHeaderText(name);
  
}
  return (
    <div className="container">
      <h1>Hello {headerText}</h1>
      <input 
      type="text" 
      placeholder="What's your name?"
      value = {name}
      onChange={(event)=>{setName(event.target.value);
      }} />
      <button 
      onClick = {submitButton} 
       onMouseOver ={()=>setIsmouseover(current=>!current)} 
       onMouseOut = {()=>setIsmouseover(current =>!current)}
       style ={{backgroundColor:isMouseOver? "black":"white"}}
       >Submit</button>
    </div>
  );
}

export default App;
