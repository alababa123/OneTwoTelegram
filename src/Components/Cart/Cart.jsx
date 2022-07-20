import React from "react";
import "./Cart.css";
import CardInBracket from "../CardInBracket/CardInBracket";
 

function Basket({ cartItems, onCheckout, isPayment, onAdd, onRemove, tele }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const Payment = () => {
    tele.sendData(JSON.stringify(cartItems));
  } 
  return (
      <>
        <div className="shopping-cart">
            {cartItems.map((cartItems) => {
                return (<CardInBracket key={cartItems.id * cartItems.id + cartItems.size} sneaker={cartItems} onAdd={onAdd} onRemove={onRemove} />);
              })
            }
        </div>
        {
            cartItems.length !== 0 ? (
              <>
                <div className="totalPrice">
                  Сумма: ₽{totalPrice}
                </div>
                <div className="invoice">
                  <button className="button-27" role="button" onClick={Payment}>Оформить заказ</button>
                </div>
              </>)
              : 
              (<div className="cartempty"> Корзина пуста </div>)
        }
      </>
    );
}

export default Basket;
