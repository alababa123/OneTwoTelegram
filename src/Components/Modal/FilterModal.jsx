import React, { useState } from "react";
import "./FilterModal.css";
import { Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import SizeButton from "./FilterSize"
import FilterCheckBox from "./FilterCheckBox";
import PriceSlider from "./PriceSlider";
import "./FilterSize.css"

const { getFilter } = require("../../db/getFilter");

function FilterModal ({Reload, onAddFilter, onRemoveFilter, filter}){

  let sorts = ['Сначала дешевле', 'Сначала дороже']

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

  function ChangePriceFilter(min_price, max_price) {
    console.log(min_price, max_price)
    onAddFilter('min_price', min_price);
    onAddFilter('max_price', max_price);
    Reload();
  }
  
  return (
    <>
      <div className="btnFilterSect">
        <button className="btnFilter" onClick={() => handleShow(true)}>
          Фильтры
          &nbsp;&nbsp;
          <img src="https://www.adidas.de/glass/react/85fe1cf/assets/img/icon-test-filters.svg"></img>
        </button>
      </div>
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Фильтровать по</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion alwaysOpen style={{marginTop: '1em'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Цене</Accordion.Header>
            <Accordion.Body>
            <PriceSlider
              min={0}
              max={100000}
              onChange={({ min, max }) => ChangePriceFilter(min, max)}
            />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Бренду</Accordion.Header>
            <Accordion.Body>
              {filters['brands'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'brand'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} currentSize={currentSize ? currentSize : 0} write={item}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Цвету</Accordion.Header>
            <Accordion.Body>
              {filters['colors'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'color'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} Size={setSize} currentSize={currentSize ? currentSize : 0} write={item}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Размеру</Accordion.Header>
            <Accordion.Body>
              <div className="sizes-btn-container">
                {filters['sizes'].map((item) => { return (<SizeButton Reload={Reload} type={'sizes'} key={(item).toString()} title={item} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter}/>) })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Полу</Accordion.Header>
            <Accordion.Body>
              {filters['gender'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'gender'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item[0]).toString()} title={item[0]} currentSize={currentSize ? currentSize : 0} write={item[1]}/>)})}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Сортировка</Accordion.Header>
            <Accordion.Body>
              {filters['sort'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'sort'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={item} title={item[0]} currentSize={currentSize ? currentSize : 0} write={item[1]}/>) })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default FilterModal;