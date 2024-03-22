import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img className="image-container" src="https://thumbs.dreamstime.com/b/portrait-happy-smiling-young-woman-looking-mobile-phone-colorful-umbrella-pink-background-296228119.jpg?w=992" alt=" " />
        <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
       <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link  style={{ textDecoration: 'none' }}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
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