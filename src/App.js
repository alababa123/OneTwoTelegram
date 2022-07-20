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

var minprice = ""
var maxprice = ""
var gender = ""
var brand = []
var group = []
var sizes = []


const tele = window.Telegram.WebApp;
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [display_invoice, invoice_state] = useState(false);
  const [cartCount, setcartCount] = useState(0)
  
  let filters = {
    'brands': [],
    'min_price': 0,
    'max_price': 0,
    'sizes': [],
    'genders': [],
    'colors': [],
  }
  const [filter, setFilter] = useState(filters);
  
  console.log("filter:" , filter)
  
  useEffect(() => {
    tele.ready();
  });


  const onAddFilter = (filterName, value) => {
    console.log(filterName, value);
    if (!filter[filterName].includes(value)){

      filter[filterName].push(value)

      setFilter(
        filter
      )
      console.log(1)
    }
  };
  
  const onRemoveFilter = (filterName, value) => {
    if (filter[filterName].includes(value)){

      filter[filterName].splice(filter[filterName].indexOf(value), 1)
      
      setFilter(
        filter
      )
      console.log(2)

    }
    // console.log(filter)

  }

  // function edit_store(filters) {
  //   brand = new_brand
  //   minprice = new_minprice
  //   maxprice = new_maxprice
  //   gender = new_gender
  //   sizes = new_sizes
  //   group = new_group
  //   console.log(minprice, maxprice)
  //   var sneakers = getData(minprice, maxprice)
  // }

  
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
        <Route path="/" element={<Store onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} filter={filter} sneaker={getData(minprice, maxprice)} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
        <Route path="/store/:id" element={<CardDetail sneaker={getData(minprice, maxprice)} onAdd={onAdd} onRemove={onRemove}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={onCheckout} isPayment={false} onAdd={onAdd} onRemove={onRemove} tele={tele}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
