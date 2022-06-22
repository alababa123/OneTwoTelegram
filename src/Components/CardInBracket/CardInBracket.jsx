import React, { useState } from "react";
import "./CardInBracket.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function CardInBracket({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id, quantity, size } = food;

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
    <div className="item">
      <div className="buttons">
        <span className="delete-btn"></span>
        <span className="like-btn"></span>
      </div>
      <Link to={`/store/${food.id}`} className="image">
        <img src={Image} alt="" />
      </Link>
      <Link to={`/store/${food.id}`} className="description">
        <span>{title}</span>
        <span>Кол-во: {quantity}</span>
        <span>Размер: {size}</span>
      </Link>
   
      <div className="quantity">
        {/* <button className="plus-btn" type="button" name="button" onClick={handleIncrement}>
          +
        </button> */}
        <button className="minus-btn" type="button" name="button" onClick={handleDecrement}>
          -
        </button>
      </div>
   
      <div className="total-price">{price * quantity}₽</div>
    </div>
  </>
  );
}

export default CardInBracket;