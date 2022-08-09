import React, { useState } from "react";

function App() {
 const [fullName,setFname] = useState({
  fName:"",
  lName:""
 });
function setFnames(event){
  const{name,value}= event.target;
  setFname((prepData)=>{
    if(name === "fName"){
      return({
        fName:value,
        lName:prepData.lName
      })
    }else if(name ==="lName"){
      return{
        fName:prepData.fName,
        lName:value
      }
    }
  })
}


  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={setFnames}
          value = {fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={setFnames}
          value = {fullName.lName}
           />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
