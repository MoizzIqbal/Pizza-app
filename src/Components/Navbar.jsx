import React from 'react'
import logo from "../Images/pizzaLogo.png"
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
   <NavLink className="navbar-brand" to="/">
      <img src={logo} className='logo' alt='logo'/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
