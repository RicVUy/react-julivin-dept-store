import React from 'react'

const NewColProducts = ({product}) => {
    const {
        
        name,
        image,
        color,
        size,
        productdesc,
        price,
        inventory
    } = product
  return (
    <div >
        <h3>Product</h3>
          <div className='image-container'>
          <img src={image} alt={name} />
          </div>
          <div className="card-content">  
          <h4>{name}</h4>
          <p>{color}</p>
          <p>{size}</p>
          <p>{productdesc}</p>
          <p>Price: {price}</p>
          <p>Inventory: {inventory}</p>
    </div>
    </div>
  )
}

export default NewColProducts;