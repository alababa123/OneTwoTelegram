import React, { useState } from "react";
import "./FilterSize.css"

function SizeButton({ type, title, disable, onAddFilter, onRemoveFilter, filter, Reload}) {
  
  
  const clickHandler = () => {
    if (filter[type].indexOf(title) != -1){
        onRemoveFilter(type, title);
    }
    else{
        onAddFilter(type, title);
    }
    Reload();
  }

  return (
    <button
      className={(filter[type].includes(title) == true) ? 'sizebin_foc' : 'sizebin_default'}
      type="submit"
      disabled={
          disable
    }
      onClick={() => clickHandler()}
    >
      {title / 10}
    </button>
  );
}

export default SizeButton;
