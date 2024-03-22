import React, {useState, useEffect} from 'react'
import './Popular.css'
import Productpop from './Productpop'
const Popular = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/Products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);
console.log(products)
  const productList = products.map((product)=> (
<Productpop key={product.id} product={product}/>
  ))
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
       {productList}
       </div>
    </div>
  )
}

export default Popular