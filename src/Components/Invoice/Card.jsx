import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ sneaker, onAdd, onRemove }) {
  const [count, setCount] = useState();
  const { title, Image, price, id } = sneaker;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(sneaker);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(sneaker);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} <br/>Цена: <span className="card__price">₽{price}</span>
      </h4>

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
