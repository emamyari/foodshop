import React from 'react'
import './Header.css'
import { useState,useEffect } from 'react'
export const Header = (props) => {
let [count,setCount]=useState(0)  
useEffect(() => {
    let c=0
    props.sabad.forEach(element => {

      c=c+element.count
      setCount(c)
    });
  },[props.sabad]);

  
  return (
    <div  className='main m'  >products count :
     <button onClick={()=>props.openModal()}>
         {count}
     </button>
     </div>
  )
}
