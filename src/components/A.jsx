import React from 'react'
import Button from './Button'
import '../App.css'

const A = ({a,b,incA,decB}) => {
  return (
    <div className='wrapper'>
      <h1>Hello, This is Component A.</h1>
        <div className="content-wrapper">
            <h1>A:{a}</h1>
            <h1>B:{b}</h1>
        </div>
        <div className="buttons-wrapper">
        <Button name='Increment-A' color='success' handleClick={incA}/>
        <Button name='Decrement-B' color='danger'handleClick={decB}/>
        </div>
    </div>
  )
}

export default A