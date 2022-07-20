import React, { useState } from "react";
import "./FilterCheckBox.css";

function FilterCheckBox({ type, title, disable, onAddFilter, onRemoveFilter, filter}){
    
    const [kostil, setKostil] = useState(0)

    const clickHandler = () => {
        console.log(filter)
        if (filter[type].indexOf(title) != -1){
            setKostil(0)
            onRemoveFilter(type, title);
        }
        else{
            setKostil(1)
            onAddFilter(type, title);
        }
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
          {title}
        </button>
        </>
    );
};

export default FilterCheckBox;
