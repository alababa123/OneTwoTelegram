import React from "react";
import "./SizeButton.css"
function SizeButton({ type, title, disable, Size }) {
  return (
    <button
      className='sizebin'
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
