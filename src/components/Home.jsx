import React ,{useEffect} from 'react'
import Button from './Button'
import '../App.css'

const Home = ({a,b,incA,incB}) => {  

  useEffect(() => {
      document.title = `Count A:${a}`
      console.log(`Message from useEffect, Value of a :${a} & b:${b}`)
  },[a,b])
  

  return (
    <div className='wrapper'>
        <h1>Hello, This is homepage.</h1>
        <div className="content-wrapper">
            <h1>A:{a}</h1>
            <h1>B:{b}</h1>
        </div>
        <div className="buttons-wrapper">
        <Button name='Increment-A' color='success' handleClick={incA}/>
        <Button name='Increment-B' color='success'handleClick={incB}/>
        </div>
    </div>
  )
}

export default Home