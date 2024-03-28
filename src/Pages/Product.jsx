import React, { useContext } from 'react'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import  ShopContextProvider  from '../Context/ShopContextProvider'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
const Product = () => {
  const {all_product} = useContext(ShopContextProvider)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
    </div> 
  )
}

export default Product