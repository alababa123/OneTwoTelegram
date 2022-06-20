import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import CardDetail from "./Components/CardDetail/CardDetail";
import Store from './Components/Store/Stope'
import Header from "./Components/Header/Header";

const { getData } = require("./db/db");
const foods = getData();


const tele = window.Telegram.WebApp;
// console.log(foods)
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [display_invoice, invoice_state] = useState(false);
  const [cartCount, setcartCount] = useState(0)

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food, cursize) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist && exist.size === cursize) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
      console.log(cartItems)
    } else {
      setCartItems([...cartItems, { ...food, size: cursize, quantity: 1 }]);
      console.log(cartItems)
    }
    setcartCount(cartCount + 1)
    console.log(cartItems)
  };

  const onRemove = (food, cursize) => {
    var exist = cartItems[0]
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].size === cursize && cartItems[i].id === food.id){
          exist = cartItems[i]
        }
    }
    console.log(exist)
    // const exist = cartItems.find((x) => x.id === food.id && x.size === cursize);
    if (exist.quantity === 1) {
      // console.log(cartItems.filter((x) => ((x.id !== food.id) && (x.size == cursize))))
      setCartItems(cartItems.filter((x) => ((x !== exist))));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    setcartCount(cartCount - 1)
    console.log(cartCount)
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
      <Header cartItems={cartItems} onCheckout={onCheckout} isPayment={false} count={cartCount}/>
      <Routes>
        <Route path="/" element={<Store food={foods} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
        <Route path="/store/:id" element={<CardDetail food={foods} onAdd={onAdd} onRemove={onRemove}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={onCheckout} isPayment={false} onAdd={onAdd} onRemove={onRemove} tele={tele}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
