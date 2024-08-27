import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import Counters from './Counter/Counters'
import { Header } from './Header/Header';
import { Products } from './Products/Products';
const App = () => {
  const [sabad, setSabad] = useState([])
  function add(title) {
    var newList = sabad
    newList = [...sabad, title]
    setSabad(newList)

  }
  function del(title) {
    let index = sabad.indexOf(title)
     if (index != -1) {
      let b = [...sabad.slice(0, index), ...sabad.slice(index + 1)];
      setSabad(b)
    }

  }

  function showSabad(){
    alert(123)
  }

  return (
    <div>
      <Header sabad={sabad} showSabad={showSabad} ></Header>
      <Products add={add} del={del} />
    </div>
  )
}
export default App;