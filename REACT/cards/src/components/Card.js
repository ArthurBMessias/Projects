import React from "react";
import card from "../images/port.png"

function Card() {
  return (
    <div>
      <h1>Card</h1>
      <h2>Olá me chamo Arthur! E quero essa vaga!</h2>
      <img src={card} alt="myImage"></img>
    </div>
  );
}

export default Card;