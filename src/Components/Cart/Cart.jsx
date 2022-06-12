import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout, isPayment }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  if (!isPayment){
    return (
      <div className="cart__container">
        {cartItems.length === 0 ? "В корзине пусто " : "Сумма заказа: ₽" + totalPrice.toFixed(2)}        
        <Button
          title={`${cartItems.length === 0 ? "Выберите кроссовки" : "Заказать"} `}
          type={"checkout"}
          disable={cartItems.length === 0 ? true : false}
          onClick={onCheckout}
        />
      </div>
    );
  }
  else{
    return (
      <div className="cart__container">
        {cartItems.length === 0 ? "В корзине пусто " : "Сумма заказа: ₽" + totalPrice.toFixed(2)}        
        <Button
          title={`${cartItems.length === 0 ? "Выберите кроссовки" : "Оплатить"} `}
          type={"checkout"}
          disable={cartItems.length === 0 ? true : false}
          onClick={onCheckout}
        />
      </div>
    );
  }
}

export default Cart;
