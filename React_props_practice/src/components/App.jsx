import React from "react";
import Contacts from "../contacts"
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
      name={Contacts[0].name}
      phone={Contacts[0].phone}
      email={Contacts[0].email}
      img={Contacts[0].imgURL}
    />
    <Card
     name={Contacts[1].name}
      phone={Contacts[1].phone}
      email={Contacts[1].email}
      img={Contacts[1].imgURL}
    />
    <Card
      name={Contacts[2].name}
      phone={Contacts[2].phone}
      email={Contacts[2].email}
      img={Contacts[2].imgURL}
    />
      
    </div>
  );
}

export default App;
