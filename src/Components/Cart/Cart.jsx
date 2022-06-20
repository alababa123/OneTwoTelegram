import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import CardInBracket from "../CardInBracket/CardInBracket";
 

function Basket({ cartItems, onCheckout, isPayment, onAdd, onRemove, tele }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const Payment = () => {
    console.log(JSON.stringify(cartItems))
    tele.sendData(JSON.stringify(cartItems));
  } 
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
          <button class="button-27" role="button" onClick={Payment}>Оформить заказ</button>
        </div>): null}
      </>
    );
}

export default Basket;
