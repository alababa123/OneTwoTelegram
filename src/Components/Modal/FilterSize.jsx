import React, { useState } from "react";
import "./FilterSize.css"

function SizeButton({ type, title, disable, Size, onAddFilter, onRemoveFilter, filter}) {
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
  console.log(type)
  return (
    <button
      className={(filter[type].includes(title) == true) ? 'sizebin_foc' : 'sizebin_default'}
      // className='sizebin_default'
      type="submit"
      disabled={
          disable
    }
      onClick={() => clickHandler()}
    >
      {title}
    </button>
  );
}

export default SizeButton;
