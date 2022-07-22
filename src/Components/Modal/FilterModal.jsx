import React, { useState } from "react";
import "./FilterModal.css";
import { Modal } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import SizeButton from "./FilterSize"
import FilterCheckBox from "./FilterCheckBox";
import "./FilterSize.css"
import galochka from "./galo4ka.png"
import MultiRangeSlider from "./MultirangeSlider/MultiRangeSlider";
import CrossHair from "./cross.svg";
const { getFilter } = require("../../db/getFilter");
function FilterModal ({Reload, onAddFilter, onRemoveFilter, filter, showCarousel}){

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

  function ChangeMinPriceFilter(min_price) {
    onAddFilter('min_price', min_price);
    Reload();
  }

  function ChangeMaxPriceFilter(max_price) {
    onAddFilter('max_price', max_price);
    Reload();
  }
  const ClickHandler = (type, title) => {
    console.log('bebra')
    if (filter[type].indexOf(title) != -1){ 
      console.log('lebra')
      onRemoveFilter(type, title);
    }
    console.log(filter)
    Reload();
  }
  return (
    <>
      <div className="btnFilterSect">
        <button className="btnFilter" onClick={() => handleShow(true)}>
          <span style={{'text-decoration': 'none', 'color': 'black'}}>
          Фильтры
          </span>
          &nbsp;&nbsp;
          <img src="https://www.adidas.de/glass/react/85fe1cf/assets/img/icon-test-filters.svg" alt="img-filters"></img>
        </button>
      </div>
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Фильтровать по</Modal.Title>
        </Modal.Header>
        {showCarousel == false ? (
        <div className="existingFilter">
          <span style={{'font-weight': '40'}}>
            Применяемые фильтры
          </span>
                <div className="existFilterSect">
                {
                  filter['brand'].map((item) => {return (
                    <>
                    &nbsp;
                    <button className="existFilterBtn" onClick={() => ClickHandler('brand', item)}>
                      <img src={CrossHair}/>
                      &nbsp;
                      {item}
                      </button>
                    </>
                    )
                    }
                  )
              }
              {
                filter['color'].map((item) => {return (
                  <>
                  &nbsp;
                  <button className="existFilterBtn" onClick={() => ClickHandler('brand', item)}>
                    <img src={CrossHair}/>
                    &nbsp;
                    {item}
                    </button>
                  </>
                  )
                  }
                )
              }
              {filter['sizes'].map((item) => {return (
                    <>
                    &nbsp;
                    <button className="existFilterBtn" onClick={() => ClickHandler('brand', item)}>
                      <img src={CrossHair}/>
                      &nbsp;
                      {item / 10}
                      </button>
                    </>
                    )
                    }
                  )
              }
              {
                    <>
                    {filter['gender'] != '' ? (
                      <>
                    &nbsp;
                    <button className="existFilterBtn" onClick={() => ClickHandler('gender', filter['gender'])}>
                      <img src={CrossHair}/>
                      &nbsp;
                      {
                      filter['gender'] == 'M' ? 
                      'Мужские' 
                      : 
                      filter['gender'] == 'U' ? ('Унисекс') :('Женские')
                      }
                      </button>
                      </>
                      ): ''}
                    </>
              }
              {
                    <>
                    {filter['sort'] != '' ? (
                          <>
                    &nbsp;
                    <button className="existFilterBtn" onClick={() => ClickHandler('sort', filter['sort'])}>
                      <img src={CrossHair}/>
                      &nbsp;
                      {filter['sort'] == 'increase' ? 'Дешевле' : 'Дороже'}
                      </button>
                      </>
                      ) : ''}
                    </>
                    
              }
        </div>
        </div>
      ): ("")}
        <Modal.Body>
        <Accordion alwaysOpen style={{marginTop: '1em'}}>
          {/* <Accordion.Item eventKey="0">
            <Accordion.Header>Цена</Accordion.Header>
            <Accordion.Body>
              <>
              <input placeholder="От" onChange={e => ChangeMinPriceFilter(e.target.value)}/>
              <input placeholder="До" onChange={e => ChangeMaxPriceFilter(e.target.value)}/>

            </>
            </Accordion.Body>
          </Accordion.Item> */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Бренд
            </Accordion.Header>
            <Accordion.Body>
              {filters['brands'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'brand'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} currentSize={currentSize ? currentSize : 0} write={item}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Цвет
            </Accordion.Header>
            <Accordion.Body>
              {filters['colors'].map((item) => { return (<FilterCheckBox Reload={Reload} type={'color'} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} key={(item).toString()} title={item} Size={setSize} currentSize={currentSize ? currentSize : 0} write={item}/>) })}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Размер
            </Accordion.Header>
            <Accordion.Body>
              <div className="sizes-btn-container">
                {filters['sizes'].map((item) => { return (<SizeButton Reload={Reload} type={'sizes'} key={(item).toString()} title={item} filter={filter} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter}/>) })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Пол</Accordion.Header>
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