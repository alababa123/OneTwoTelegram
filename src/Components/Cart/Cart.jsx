import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import CardInBracket from "../CardInBracket/CardInBracket";
 

function Basket({ cartItems, onCheckout, isPayment, onAdd, onRemove }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  console.log()  
  return (
      <>
      <div className="shopping-cart">
        {/* <div className="btn_back">
          <Link to={`/`} style={{ textDecoration: 'none' }}>
              Назад
          </Link>
        </div> */}
          <div class="title">
          Корзина
          </div>
          {cartItems.map((cartItems) => {
              return (<CardInBracket food = {cartItems} onAdd={onAdd} onRemove={onRemove} />);
            })
          }
        </div>
        {cartItems.length !== 0 ? (<div className="invoice">
          <button class="button-27" role="button" hidden>Оформить заказ</button>
        </div>): null}
        
      </>
    );
}

export default Basket;
