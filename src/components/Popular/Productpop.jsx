import React from 'react'

const Productpop = ({product}) => {
    const {
        
        name,
        image,
        new_price,
        old_price,
    } = product
  return (
    <div >
        <h3>Product</h3>
          <div className='image-container'>
          <img src={image} alt={name} />
          </div>
          <div className="card-content">  
          <p>{name}</p>
          <p>new price: ${(new_price).toFixed(2)}</p>
          <p>old price: ${(old_price).toFixed(2)}</p>
    </div>
    </div>
  )
}

export default Productpop