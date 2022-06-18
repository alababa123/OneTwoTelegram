import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CardDetail.css"

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
    <div className="cardDetail">
      <div class="column">
        <div className="image__containerDitail">
      <img src={Image} alt={title} />
      </div>
      </div>
      <div class="column">
        <h2>{title} </h2>
        <p><span className="card__discription">{"Здесь будет описание"}</span></p>
        <p><div className="btn-containerDetail">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div></p>
      </div>
    </div>

  );
}

export default CardDetail;
