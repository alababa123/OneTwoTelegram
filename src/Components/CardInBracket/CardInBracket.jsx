import React, { useState } from "react";
import "./CardInBracket.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function CardInBracket({ food }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id } = food;


  return ( 
      <div className="itemBr">
        <div className="buttonsBr">
          <span className="delete-btnBr"> x </span>
          <span className="like-btnBr"></span>
        </div>
 
        <div className="imageBr">
          <img src={Image} alt="" style={{width: "50px", height: "50px"}}/>
        </div>
 
        <div className="descriptionBr">
          <span>{title}</span>
        </div>
 
        <div className="quantityBr">
          <button className="plus-btnBr" type="buttonBr" name="buttonBr">
            +
          </button>
          <input type="textBr" name="nameBr" value="1"/>
          <button className="minus-btnBr" type="buttonBr" name="buttonBr">
            -
          </button>
        </div>
 
        <div className="total-priceBr">{price}Р</div>
      </div>
  );
}

export default CardInBracket;