import React, { useState } from "react";

function App() {
  const [firstName, setFistname] = useState("");
  const [surNames, setSurNames] = useState("");

  return (
    <div className="container">
      <h1>
        Hello {firstName} {surNames}{" "}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={(event) => {
            setFistname(event.target.value);
          }}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={(event) => {
            setSurNames(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
