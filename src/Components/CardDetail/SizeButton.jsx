import React from "react";
import "./SizeButton.css"

function SizeButton({ type, title, disable, Size, currentSize}) {
  return (
    <button
      className={(currentSize === Number(title)) ? 'sizebin_foc' : 'sizebin_default'}
      // className='sizebin_default'
      type="submit"
      disabled={
          disable
    }
      onClick={() => Size(title)}
    >
      {title}
    </button>
  );
}

export default SizeButton;
