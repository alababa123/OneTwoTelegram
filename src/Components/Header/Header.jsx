import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function Header({ cartItems, onCheckout, isPayment, count }) {

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
return (
    <div className="cart__container">  
    <Link to={`/cart`} style={{ textDecoration: 'none' }}> 
        <Button
            title={`${count !== 0 ? "Корзина (" + count + ")" : "Корзина"}`}
            type={"checkout"}
            disable={cartItems.length === 0 ? true : false}
            onClick={onCheckout}
        >
        </Button>
    </Link>
    </div>
);
}

export default Header;