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
      <div className="card">
        <Link to={`/store/${id}`} style={{ textDecoration: 'none' }}> 
          <span
            className={`${count != 0 ? "card__badge" : "card__badge--hidden"}`}
          >
            {count}
          </span>
          <div className="image__container">
            <img src={Image} alt={title} />
          </div>
          <h4 className="card__title">
            {title} <br/>Цена: <span className="card__price">₽{price}</span>
          </h4>
        </Link> 
        <div className="btn-container">
          <Button title={"+"} type={"add"} onClick={handleIncrement} />
          {count !== 0 ? (
            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
          ) : (
            ""
          )}
        </div>
      </div> 
  );
}

export default Card;
