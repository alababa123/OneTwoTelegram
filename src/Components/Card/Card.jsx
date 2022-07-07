import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Card({ countInBracket, sneaker, onAdd, onRemove }) {
  const [count, setCount] = useState(countInBracket);

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(sneaker);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(sneaker);
  };

  return (
    <Link to={`/store/${sneaker.id}`} style={{ textDecoration: 'none' }}>  
      <div className="cardItem">
          <div className="image__container">
            <img src={sneaker.Image} alt={sneaker.title}>
            </img>
          </div>

          <h4 className="card__title">
            {sneaker.title}
            <br/>
            <div className="card__price">
            &nbsp;₽ {sneaker.price}&nbsp;
          </div>
          </h4>
      </div> 
      </Link> 
  );
}

export default Card;
