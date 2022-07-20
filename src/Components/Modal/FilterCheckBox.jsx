import React, { useState } from "react";
import "./FilterCheckBox.css";

function FilterCheckBox({ type, title, disable, onAddFilter, onRemoveFilter, filter, Reload, write}){
    
    const clickHandler = () => {
        
        if (filter[type].indexOf(title) != -1){ 
            onRemoveFilter(type, title);
        }
        else{
            onAddFilter(type, title);
            console.log(type, title);
        }
        Reload();
    }
    
    return (
        <>
        <button
          className={(filter[type].includes(title) == true) ? 'FilterBin_foc' : 'FilterBin_default'}
          type="submit"
          disabled={
              disable
            }
          onClick= {() => clickHandler()}
        >
          {write}
        </button>
        </>
    );
};

export default FilterCheckBox;
