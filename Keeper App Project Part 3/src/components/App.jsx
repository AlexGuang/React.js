import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const[items ,setItems] = useState([{
  title:"Note title",
  content:"Note content"
}]);
function onAdd(item){
setItems((prep)=>[...prep,item]);
console.log("items:"+items)

}
function deleteItem(id){
  setItems(
    (prep)=>{
      return(prep.filter(
        (item,index)=>index !== id))
    }
  )
}
function deleteItems(id) {
  setItems(prevItems => {
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  });
}
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={onAdd}
      />
     
      {items?.map((item,index)=>{
     return   <Note key={index}  id = {index} title={item.title} content={item.content}
     onDelete={deleteItem} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
