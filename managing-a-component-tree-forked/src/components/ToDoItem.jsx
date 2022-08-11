import React  from "react";

function ToDoItem (props){
//const[isClicked , setIsClicked] = useState(false);


function handleClick(){
    props.clickChange(props.id);
}
    



return<li  
 onClick = {handleClick}
 id ={props.id}
 >{props.item}</li>

}

export default ToDoItem