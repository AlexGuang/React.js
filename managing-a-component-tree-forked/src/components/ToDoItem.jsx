import React ,{useState} from "react";

function ToDoItem (props){
const[isClicked , setIsClicked] = useState(true);

console.log(isClicked);
function handleClick(event){
    setIsClicked(current =>!current);
    console.log(isClicked);

    event.target.style.textDecoration = isClicked?"line-through":"";
}


return<li
 
 onClick = {handleClick}
 >{props.item}</li>

}

export default ToDoItem