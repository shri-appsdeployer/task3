import React from "react";
import Button from "./Button";
import '../App.css'


const B = ({a,b,decA,incB}) => {
  return (
    <div className="wrapper">
       <h1>Hello, This is Component B.</h1>
        <div className="content-wrapper">
            <h1>A:{a}</h1>
            <h1>B:{b}</h1>
        </div>
        <div className="buttons-wrapper">
        <Button name='Decrement-A' color='danger' handleClick={decA}/>
        <Button name='Increment-B' color='success'handleClick={incB}/>
        </div>
    </div>
  );
};

export default B;
