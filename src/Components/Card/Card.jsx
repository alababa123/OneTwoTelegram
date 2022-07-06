import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Card({ countInBracket, food, onAdd, onRemove }) {
  const [count, setCount] = useState(countInBracket);
  const { title, Image, price, id } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <Link to={`/store/${id}`} style={{ textDecoration: 'none' }}>  
      <div className="cardItem">
          <div className="image__container">
            <img src={Image} alt={title}>
            </img>
          </div>

          <h4 className="card__title">
            {title}
            <br/>
            <div className="card__price">
            &nbsp;₽ {price}&nbsp;
          </div>
          </h4>
      </div> 
      </Link> 
  );
}

export default Card;
