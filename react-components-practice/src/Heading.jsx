import React from "react";
import App from "./App";

function Heading() {
  //console.log({APP());
  let colors = {
    color: App().color
  };
  return (
    <h1 className="heading" style={colors}>
      {App().greet}
    </h1>
  );
}
export default Heading;
