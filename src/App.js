import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import Counters from './Counter/Counters'
import { Header } from './Header/Header';
import { Products } from './Products/Products';

import Modal from 'react-modal';
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


//----------------------------------------
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

//----------------------------------------

  return (
    <div>
      <Header sabad={sabad} openModal={openModal} ></Header>
      <Products sabad={sabad} add={add} del={del} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>closessss</button>
        <table className='table '>
          <thead><th>عنوان</th><th>تعداد</th></thead>
          <tbody>
            {sabad.map(item=><tr><td>{item.name}</td><td>{item.count}</td></tr>)}
          </tbody>
        </table>
      </Modal>
      
    </div>
  )
}
export default App;