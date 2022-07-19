import React, { useState } from "react";
import "./FilterModal.css";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Accordion } from "react-bootstrap";
function FilterModal (){

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div className="btnFilterSect">
        <button className="btnFilter" onClick={() => handleShow(true)}>
          Сортировка товаров
          &nbsp;&nbsp;
          <img src="https://www.adidas.de/glass/react/85fe1cf/assets/img/icon-test-filters.svg"></img>
        </button>
      </div>
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Сортировать по</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion alwaysOpen style={{marginTop: '1em'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Цене</Accordion.Header>
            <Accordion.Body>
              Ценаценацена
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Бренд</Accordion.Header>
            <Accordion.Body>
              БрендыБрендыБренды
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Цвет</Accordion.Header>
            <Accordion.Body>
              ЦветЦветЦвет
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Размеры</Accordion.Header>
            <Accordion.Body>
              РазмерыРазмерыРазмеры
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Полу</Accordion.Header>
            <Accordion.Body>
              ПолПолПол
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default FilterModal;