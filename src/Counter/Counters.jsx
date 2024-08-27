import React from 'react'
import Counter from './Counter'
import { useState } from 'react'
const Counters = () => {
  let [plist, setPlist] = useState([
    { title: 'mouse', price: 100, count: 100, color: 'red' },
    { title: 'TV', price: 500, count: 200, color: 'black' },
    { title: 'Laptop', price: 700, count: 1, color: 'blue' },
  ])

  function inc(name) {
    let pr= plist.filter(item=>item.title==name)[0]    
    let ja=plist.indexOf(pr)
    pr.count++;
    let newList=plist.filter(item=>item.title!=name)
    let kheyliNewList=[...newList.slice(0,ja), pr,...newList.slice(ja)]
    setPlist(kheyliNewList)
  }
  function dec(name) {
    let pr= plist.filter(item=>item.title==name)[0]    
    let ja=plist.indexOf(pr)
    pr.count--;
    let newList=plist.filter(item=>item.title!=name)
    let kheyliNewList=[...newList.slice(0,ja), pr,...newList.slice(ja)]
    setPlist(kheyliNewList)

  }


  return (
    <div>
      {plist.map(item => <Counter key={item.title} title={item.title}
                                  count={item.count}
                                  price={item.price}
                                  color={item.color}
                                  decrement={dec}
                                  increment={inc}
                                  />)}

    </div>
  )
}

export default Counters