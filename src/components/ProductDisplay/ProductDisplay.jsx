import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Assets/star_icon.png'
import star_dull_icon from '../Assets/Assets/star_dull_icon.png'

const ProductDisplay = (props) => {

    const {product} = props
  return (
    <div className='productdisplay'> 
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=""  />
        </div>
    </div>
    <div className="productdisplay-right"></div>
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" className="src" />
        <p>(122)</p>
    </div>
    </div>
  )
}

export default ProductDisplay