import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,  NavDropdown, Offcanvas, Form, FormControl} from "react-bootstrap";
import Cart from "./Cart.svg"

function Header({ cartItems, onCheckout, isPayment, count }) {
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
        <Navbar.Offcanvas>
        
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
);
}

export default Header;