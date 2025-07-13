import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../assets/logo.png"
import Cart_icon from '../assets/cart_icon.png'
import { Link, Links } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

export const Navbar = () => {
  const [menu, Setmenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>ShopNest</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => Setmenu("shop")}>
          <Link style={{ textDecoration: "none"}} to="./">Shop</Link> {menu === "shop" && <hr />}
        </li>
        <li onClick={() => Setmenu("mens")}>
          <Link style={{ textDecoration: "none"}} to="/mens">Men</Link> {menu === "mens" && <hr />}
        </li>
        <li onClick={() => Setmenu("womens")}>
          <Link style={{ textDecoration: "none"}} to="/womens">Women </Link>{menu === "womens" && <hr />}
        </li>
        <li onClick={() => Setmenu("kids")}>
          <Link style={{ textDecoration: "none"}} to="/kids">Kids</Link> {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={Cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
