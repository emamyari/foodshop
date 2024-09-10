import React from 'react'
import { useState,useEffect } from 'react'
import './Product.css'

import Modal from 'react-modal';


export const Products = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [state, setState] = useState([])
  useEffect(() => {
    getFoods()
  });



  function getFoods() {
    fetch('https://snappfood.ir/mobile/v2/restaurant/details/dynamic?lat=35.715&long=51.404&optionalClient=WEBSITE&client=WEBSITE&deviceType=WEBSITE&appVersion=8.1.1&UDID=1803ab32-aed6-48ff-ad3a-c0d01c691739&vendorCode=0q6ogy&locationCacheKey=lat%3D35.715%26long%3D51.404&show_party=1&fetch-static-data=1&locale=fa', {
      method: 'GET'
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        setState(result.data.menus[1].products)
      });
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>{props.sabad.map(c=><h6>{c}</h6>)}</div>
      </Modal>
      <div className="container mt-2">
        <div className="row">
        {state.map(item=> <div class="col-md-3 mt-4">
            <div class="card ">

              <div class="image-container ">

                <div class="first">

                  <div class="d-flex justify-content-between align-items-center">

                    <span class="discount">{item.discountRatio} %</span>
                    <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                  </div>
                </div>

                <img src={item.images[0]?.imageSrc??'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Eggs_and_Bacon_PNG_Vector_Clipart.png?m=1629831558'} class="img-fluid rounded thumbnail-image" />
              </div>
              <div class="product-detail-container p-2">

                <div class="d-flex justify-content-between ">

                  <h5 class="dress-name">{item.title} </h5>

                  <div class="d-flex flex-column mb-2">

                    <span class="new-price">{item.discount}</span>
                    <small class="old-price text-right">{item.price}</small>
                  </div>

                </div>


                <div class="d-flex justify-content-between align-items-center pt-1">

                  <div class="color-select d-flex ">

                    <input type="button" name="grey" class="btn creme" />
                    <input type="button" name="red" class="btn red ml-2" />
                    <input type="button" name="blue" class="btn blue ml-2" />

                  </div>

                  <div class="d-flex ">

                    <span class="item-size mr-2 btn" type="button">S</span>
                    <span class="item-size mr-2 btn" type="button">M</span>
                    <span class="item-size btn" type="button">L</span>

                  </div>


                </div>


                <div class="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i class="fa fa-star-o rating-star"></i>
                    <span class="rating-number">3.8</span>
                  </div>

                  <button onClick={()=>props.add(item.title)} class="buy">BUY +</button>
                  <button onClick={()=>props.del(item.title)} class="buy">del -</button>

                </div>
              </div>
            </div>
          </div> )}         
        
         
        </div>
      </div>
    </div>
  )
}
