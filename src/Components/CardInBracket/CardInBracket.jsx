import React, { useState } from "react";
import "./CardInBracket.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function CardInBracket({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id, quantity } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return ( 
    <>

    <div class="item">
      <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
      </div>
   
      <div class="image">
        <img src={Image} alt="" />
      </div>
   
      <div class="description">
        <span>{title}</span>
        <span>Кол-во: {quantity}</span>
      </div>
   
      <div class="quantity">
        <button class="plus-btn" type="button" name="button" onClick={handleIncrement}>
          +
        </button>
        <button class="minus-btn" type="button" name="button" onClick={handleDecrement}>
          -
        </button>
      </div>
   
      <div class="total-price">{price * quantity}₽</div>
    </div>
  </>
  );
}

export default CardInBracket;