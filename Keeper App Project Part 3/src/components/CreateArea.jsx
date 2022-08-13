import React ,{useState} from "react";


function CreateArea(props) {
  const[textInput, setTextinput] = useState({
    title:"",
    content:""
  });

  function onInput(event){
    let newData ;
    if(event.target.name ==="title"){
      setTextinput((prep)=>{
     
     newData = prep;
     newData.title = event.target.value
    return newData})}
    else if(event.target.name==="content"){
      setTextinput((prep)=>{
     
        newData = prep;
        newData.content = event.target.value
       return newData})}
       console.log(textInput)
    }

  return (
    <div>
      <form>
        <input
        onChange ={(event) =>onInput(event)}
         name="title" placeholder="Title"  value = {textInput.title} />
        <textarea 
        onChange = {(event) =>onInput(event)}
        name="content" placeholder="Take a note..." rows="3" value = {textInput.content}  />
        <button onClick = {(event)=>{
        props.onAdd(textInput);
        event.preventDefault();
        textInput = {
          title:"",
          content:""
        }}
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
