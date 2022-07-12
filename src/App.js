import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import CardDetail from "./Components/CardDetail/CardDetail";
import Store from './Components/Store/Store'
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const { getData } = require("./db/db");
const sneakers = getData();


const tele = window.Telegram.WebApp;
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [display_invoice, invoice_state] = useState(false);
  const [cartCount, setcartCount] = useState(0)

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (sneaker, cursize) => {
    var exist = 0
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].size === cursize && cartItems[i].id === sneaker.id){
          exist = cartItems[i]
        }
    }
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          (x.id === sneaker.id && x.size === cursize) ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...sneaker, size: cursize, quantity: 1 }]);
    }
    setcartCount(cartCount + 1)
  };

  const onRemove = (sneaker, cursize) => {
    var exist = cartItems[0]
    for (var i = 0; i < cartItems.length; i++){
        if (cartItems[i].size === cursize && cartItems[i].id === sneaker.id){
          exist = cartItems[i]
        }
    }
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => ((x !== exist))));
    } else {
      setCartItems(
        cartItems.map((x) =>
        (x.id === sneaker.id && x.size === cursize) ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
    setcartCount(cartCount - 1)
  };
  
  const onCheckout = () => {
    invoice_state(true)
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
        <Route path="/" element={<Store sneaker={sneakers} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
        <Route path="/store/:id" element={<CardDetail sneaker={sneakers} onAdd={onAdd} onRemove={onRemove}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={onCheckout} isPayment={false} onAdd={onAdd} onRemove={onRemove} tele={tele}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
