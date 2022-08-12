import React from "react";


function InputArea(prop) {
  return (
    <div className="form">
      <input onChange={(event)=>prop.handleChange(event)} type="text" value={prop.inputText} />
      
      <button onClick={ prop.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
