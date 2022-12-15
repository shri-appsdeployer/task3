import React from "react";

const Button = ({name,color,handleClick}) => {
  return (
    <>
      <button type="button" className={`btn btn-outline-${color}`} onClick={handleClick} >
        {name}
      </button>
    </>
  );
};

export default Button;
