import React, { useState } from "react";
import "../Card/Card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CardDetail({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const cur_id = useParams();
  console.log(food);
  const { title, Image, price, id } = food[cur_id.id];
  
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food[cur_id.id]);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food[cur_id.id]);
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
      <Link to={`/store/${id}`}>
      <h4 className="card__title">
        {title} <br/>Цена: <span className="card__price">₽{price}</span>
      </h4>
      </Link>
      <div className="btn-container">
        <Button title={"Добавить в корзину"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardDetail;
