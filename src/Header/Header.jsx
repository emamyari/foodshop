import React from 'react'
import './Header.css'
export const Header = (props) => {


  return (
    <div  className='main m'  >products count :
     <button onClick={()=>props.openModal()}>
         {props.sabad.length}
     </button>
     </div>
  )
}
