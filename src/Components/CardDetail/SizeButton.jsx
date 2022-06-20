import React from "react";

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
