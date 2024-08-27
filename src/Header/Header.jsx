import React from 'react'
import './Header.css'
export const Header = (props) => {


  return (
    <div  className='main m'  >products count :
     <button onClick={()=>props.showSabad()}>
         {props.sabad.length}
     </button>
     </div>
  )
}
