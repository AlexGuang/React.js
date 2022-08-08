import React,{useState} from "react";





function App() {

const [headerText,setHeaderText] = useState("");
const [isMouseOver,setIsmouseover] = useState(false);
const [name,setName] = useState("");
function submitButton(event){
  
  setHeaderText(name);
  event.preventDefault();
  
}
  return (
    <div className="container">
      <h1>Hello {headerText}</h1>
      <form onSubmit={submitButton}>
        <input 
        type="text" 
        placeholder="What's your name?"
        value = {name}
        onChange={(event)=>{setName(event.target.value);
        }} />
        <button 
        type = "submit"
        onMouseOver ={()=>setIsmouseover(current=>!current)} 
        onMouseOut = {()=>setIsmouseover(current =>!current)}
        style ={{backgroundColor:isMouseOver? "black":"white"}}
        >Submit</button>
      </form>
      
    </div>
  );
}

export default App;
