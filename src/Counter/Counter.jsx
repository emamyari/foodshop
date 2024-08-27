import React from 'react'
import { useState } from 'react'

const Counter = (props) => {
  
 
  return (
    <div className='col-md-12 d-flex'>
        <span className='m-2 bg-light col-md-3'>{props.title}</span>
        <button onClick={()=>props.decrement(props.title)}  className='btn btn-danger m-2'>-</button>
        <span   className='m-2 bg-light'>{props.count}</span>
        <button onClick={()=>props.increment(props.title)} className='btn btn-success m-2'>+</button>

        <span   className='m-2 bg-light'>{props.price}</span>
        <span   className='m-2 bg-light'>{props.color}</span>
        <span   className='m-2 bg-light'>{props.count*props.price}</span>


    </div>
  )
}

export default Counter