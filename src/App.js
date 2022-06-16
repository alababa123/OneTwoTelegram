import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import CardDetail from "./Components/CardDetail/CardDetail";
import Store from './Components/Store/Stope'

const { getData } = require("./db/db");
const foods = getData();


const tele = window.Telegram.WebApp;
// console.log(foods)
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [display_invoice, invoice_state] = useState(false);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  
  const Payment = () => {
    tele.sendData(JSON.stringify(cartItems));
  }
  const onCheckout = () => {
    invoice_state(true)
    // tele.sendData(JSON.stringify(cartItems));
    tele.MainButton.text = 'Закрыть корзину';
    tele.MainButton.show();
    
  };

  window.Telegram.WebApp.onEvent('mainButtonClicked', function(){
    if (tele.MainButton.text = 'Закрыть корзину'){
      invoice_state(false)
      tele.MainButton.text = 'Открыть корзину';
      tele.MainButton.hide();
    }

});
  return (
    <>
    <BrowserRouter>
      <h1 className="heading">Заказ кроссовок</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} isPayment={false}/>
      <Routes>
        <Route path="/" element={<Store food={foods} onAdd={onAdd} onRemove={onRemove}/>}/>
        <Route path="/store/:id" element={<CardDetail food={foods} onAdd={onAdd} onRemove={onRemove}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
