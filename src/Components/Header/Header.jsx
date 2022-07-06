import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,  NavDropdown, Offcanvas, Form, FormControl} from "react-bootstrap";
import Cart from "./Cart.svg"

function Header({ cartItems, onCheckout, isPayment, count }) {

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    return (
    <>
    <Navbar fixed='top' expand='sm' style={{backgroundColor: "#D9D9D9", justifyContent: "unset"}}>
        <Container style={{justifyContent: 'unset'}}>
        <Navbar.Toggle style={{border: 0}}/>
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
        <Navbar.Offcanvas
        //   id={`offcanvasNavbar-expand-false`}
        //   aria-labelledby={`offcanvasNavbarLabel-expand-false`}
        //   placement="end"
        >
        
          <Offcanvas.Header closeButton>
        
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              Меню
            </Offcanvas.Title>
        
          </Offcanvas.Header>
        
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-false`}
                >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    <div style={{marginBottom: '50px', width: '100%', position : "relative"}}></div>
    </>
    // <div className="header__container">

    // <div className="cart__title">
    //     <Link to='/'>
    //     <span>OneTwoSneaker</span> 
    //     </Link>

    // </div>

    // <Link to={`/cart`} style={{ textDecoration: 'none' }}> 
    // <div className="cart__image">
    //     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    //     width="50px" height="30px"
    //                  viewBox="0 0 64 64">
    //             <text x="27px" y="30px" fontSize="15px" fontWeight="bold" strokeWidth="0.5" fill="black">{count}</text>  
    //             <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    //             fill="#000000" stroke="none">
    //             <path d="M30 625 c0 -4 10 -20 21 -37 16 -22 28 -74 49 -205 19 -120 33 -180
    //             44 -191 14 -14 43 -18 162 -20 146 -4 194 1 194 18 0 5 -74 10 -164 12 -91 2
    //             -168 7 -172 11 -4 4 -17 69 -29 145 l-21 137 225 3 c123 1 226 0 229 -2 2 -3
    //             -3 -37 -13 -76 -13 -54 -24 -75 -43 -88 -15 -9 -83 -24 -170 -37 -91 -12 -147
    //             -25 -150 -33 -5 -17 32 -15 181 7 131 20 151 27 179 58 14 15 58 163 58 196 0
    //             4 -112 7 -249 7 l-249 0 -23 48 c-13 26 -32 48 -41 50 -10 2 -18 0 -18 -3z"/>
    //             <path d="M176 114 c-20 -20 -20 -68 0 -88 8 -9 28 -16 44 -16 36 0 60 24 60
    //             60 0 36 -24 60 -60 60 -16 0 -36 -7 -44 -16z m69 -44 c0 -18 -6 -26 -23 -28
    //             -24 -4 -38 18 -28 44 3 9 15 14 28 12 17 -2 23 -10 23 -28z"/>
    //             <path d="M386 108 c-20 -28 -20 -48 0 -76 23 -34 83 -27 104 11 13 24 13 30 0
    //             55 -21 37 -81 44 -104 10z m79 -38 c0 -20 -6 -26 -28 -28 -18 -2 -29 2 -33 12
    //             -11 28 4 48 33 44 22 -2 28 -8 28 -28z"/>
    //             </g>
    //     </svg>
    // </div>
    //     {/* <Button
    //         title={`${count !== 0 ? "Корзина (" + count + ")" : "Корзина"}`}
    //         type={"checkout"}
    //         disable={cartItems.length === 0 ? true : false}
    //         onClick={onCheckout}
    //     >
    //     </Button> */}
    // </Link>
    // </div>
    // <hr/>
    // </>
);
}

export default Header;