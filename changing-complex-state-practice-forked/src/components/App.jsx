import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function inputChange(event) {
    const { name, value } = event.target;
    setContact((preData) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preData.lName,
          email: preData.email
        };
      } else if (name === "lName") {
        return {
          fName: preData.fName,
          lName: value,
          email: preData.email
        };
      } else if (name === "email") {
        return {
          fName: preData.fName,
          lName: preData.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={inputChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={inputChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={inputChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
