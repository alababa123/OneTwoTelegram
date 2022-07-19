import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,  NavDropdown, Offcanvas, Form, FormControl} from "react-bootstrap";
import Cart from "./Cart.svg"

function Header({ cartItems, onCheckout, isPayment, count } ) {

    return (
    <>
    <Navbar fixed='top' expand='sm' style={{backgroundColor: "#D9D9D9", justifyContent: "unset"}}>
        <Container style={{justifyContent: 'unset'}}>
        {/* <Navbar.Toggle style={{border: 0}}/> */}
          <Link to='/' className="NoneDecor">
                  <Navbar.Brand style={{fontFamily: "Oxanium"}}>
                      OneTwoSneaker
                  </Navbar.Brand>
          </Link>
        
          <div className="cart__image" style={{}}>
              <Link to={`/cart`} style={{ textDecoration: 'none' }}> 
                  <img src={Cart}></img>
              </Link>
          </div>
        
        </Container>
    </Navbar>
    <div style={{marginBottom: '50px', width: '100%', position : "relative"}}></div>
    </>
);
}

export default Header;