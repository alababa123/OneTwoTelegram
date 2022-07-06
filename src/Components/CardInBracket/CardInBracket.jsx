import React, { useState } from "react";
import "./CardInBracket.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function CardInBracket({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id, quantity, size } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food, size);
    console.log(size);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food, size);
    console.log(size);
  };

  return ( 
    <>
    <div className="itemInCart">
        <div className="cartImage">
          <img src={Image} alt="" style={{width: '90%', height: '90%'}}/>
        </div>

      <div className="description" >
      <Link to={`/store/${food.id}`} style={{textDecoration: 'none', color: 'black' }}>
        {title}
        <br/>
        ₽{price * quantity}
        {/* <span>Кол-во: {quantity}</span>
        */}
        <div className="sizeSect">
             {size} размер
        </div>
      </Link>
      </div>
      
      <div className="quantity">
        <div className="minusBtnSect">
          <button className="minus-btn" type="button" name="button" onClick={handleDecrement}>
            -
          </button>
        </div>
          {quantity}
        <div className="plusBtnSect">
          <button className="minus-btn" type="button" name="button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div> 
    </div>
    
  </>
  );
}

export default CardInBracket;