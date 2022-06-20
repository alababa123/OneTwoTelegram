import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CardDetail.css"
import SizeButton from "./SizeButton"


function selectSize(size) {
  console.log('я работаю')
  console.log(size)
}

function CardDetail({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const cur_id = useParams();
  const { title, Image, price, id, sizes } = food[cur_id.id];
  
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food[cur_id.id]);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food[cur_id.id]);
  };

  return (
    <>
    <div className="cardDetail">
      <div className="column">
        <div className="image__containerDitail">
          <img src={Image} alt={title} />
        </div>
      </div>
      <div className="column">
        <h2>{title} </h2>
        <p><span className="card__discription">{"Здесь будет описание"}</span></p>
        <p><div className="sizes-btn-container">
          {sizes.map((size) => { return (<SizeButton title={size} />) })}
        </div></p>
        <p>
          <button className="btn-add" onClick={handleIncrement}>Добавить в корзину</button>
          {count !== 0 ? (
            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
          ) : (
            ""
          )}</p>
      </div>
    </div>
    </>
  );
}

export default CardDetail;