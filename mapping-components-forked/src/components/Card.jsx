import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Paragraph from "./Paragraph";

function 
(props) {
  return (
    <div className="card">
      <div className="top">
        <Paragraph id={props.id} />
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
