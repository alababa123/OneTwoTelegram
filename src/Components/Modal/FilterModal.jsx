import React, { useState } from "react";
import "./FilterModal.css";
import { Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import SizeButton from "./FilterSize"
import FilterCheckBox from "./FilterCheckBox";
import "./FilterSize.css"

const { getFilter } = require("../../db/getFilter");

function FilterModal ({onAddFilter, onRemoveFilter, filter}){
  let filters = getFilter()

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [currentSize, setcurrentSize] = useState([])
  const setSize = (title) => {
    setcurrentSize(title)
  } 
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
            <Accordion.Header>Бренду</Accordion.Header>
            <Accordion.Body>
              {filters['brands'].map((item) => { return (<FilterCheckBox type={'brands'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} currentSize={currentSize ? currentSize : 0}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Цвету</Accordion.Header>
            <Accordion.Body>
              {filters['colors'].map((item) => { return (<FilterCheckBox type={'colors'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} Size={setSize} currentSize={currentSize ? currentSize : 0}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Размеру</Accordion.Header>
            <Accordion.Body>
              <div className="sizes-btn-container">
                {filters['sizes'].map((item) => { return (<SizeButton type={'sizes'} key={(item).toString()} title={item/10} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter}/>) })}
              </div>
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