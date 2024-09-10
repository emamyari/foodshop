import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import Counters from './Counter/Counters'
import { Header } from './Header/Header';
import { Products } from './Products/Products';
const App = () => {
  const [sabad, setSabad] = useState([])
  
  function add(title) {
    let product=sabad.filter(item=>item.name==title)[0]
    if (product==null){
    let newList=sabad
    newList.push({name:title,count:1})
    setSabad(newList)
   }else{ 
    product.count++
    let newList=sabad.filter(item=>item.name!=title)
    newList.push(product)
    setSabad(newList)
   }
   console.log(sabad)
  }
  function del(title) {
   let product=sabad.filter(item=>item.name==title)[0]
   if (product!=null){
    product.count--
    let newList=sabad.filter(item=>item.name!=title)
    newList.push(product)
    setSabad(newList)
   }
   console.log(sabad)

  }

  function showSabad(){
    alert(123456)
  }

  return (
    <div>
      <Header sabad={sabad} showSabad={showSabad} ></Header>
      <Products sabad={sabad} add={add} del={del} />
    </div>
  )
}
export default App;