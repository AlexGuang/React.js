import React from "react";

function App() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;
  let componentNew = {};

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return {
    greet: greeting,
    color: customStyle.color
  };
}

export default App;
