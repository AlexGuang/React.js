import React from "react";
import Emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function Entry() {
  return <dl className="dictionary"> {Emojipedia.map(createCard)} </dl>;
}

export default Entry;
