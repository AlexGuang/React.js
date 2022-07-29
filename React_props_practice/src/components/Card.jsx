import React from "react";
function Card(prop){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{prop.name}</h2>
                <img
                    src={prop.img}
                    alt="avatar_img"
                    className = "circle-img"
                />
            </div>
            <div className="bottom">
                <p className="info">{prop.phone}</p>
                <p className="info">{prop.email}</p>
            </div>
      </div>
  )
}
export default Card;