import React from "react";

const setSize = (title) => {
    console.log(title)
} 

function SizeButton({ type, title, disable }) {
  return (
    <button
      className='sizebin'
      type="submit"
      disabled={
          disable
    }
      onClick={() => setSize(title)}
    >
      {title}
    </button>
  );
}

export default SizeButton;
