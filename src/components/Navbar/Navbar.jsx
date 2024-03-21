import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src="https://iconscout.com/lottie-animation/add-to-basket-3959073" alt=" " />
        <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
       <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-to-cart-1480740-1253735.png?f=webp&w=256" alt="" /></Link>
       <div className="nav-cart-count">0</div>
    </div>
    </div>
  )
}

export default Navbar