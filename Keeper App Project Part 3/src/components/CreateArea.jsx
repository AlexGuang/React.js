import React ,{useState} from "react";


function CreateArea(props) {
  const[textInput, setTextinput] = useState({
    title:"",
    content:""
  });

  function onInput(event){
    const{name,value} = event.target ;

    setTextinput((prep)=>{
      return({
        ...prep,
        [name] : value
      })
    })}


    // if(name ==="title"){
    //   setTextinput((prep)=>{
    //   return{
    //     title:value,
    //     content:prep.content      
    // } })}
    // else if(name==="content"){
    //   setTextinput((prep)=>{
            
    //    return {
    //     title:prep.title,
    //     content:value
    //    }})}
    //    console.log(textInput)
    // }

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
        setTextinput({
          title:"",
          content:""
        })}
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea ;
