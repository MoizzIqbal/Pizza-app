import React from 'react'
// import banner from "../Images/pizza.jpeg"
import './Home.css'

import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  function mpage(){
    navigate("/menu")
  }
  return (
    <div>
      <div className="bg-img">

        <div className="des   align-items-center">
          <h1 className='fs-1 '>Pedro's Pizzeria</h1>
          <p className='fs-4 p'>PIZZA TO FIT ANYTASTE</p>
            <button className='btn btn-dark fw-bold' onClick={mpage}>ORDER NOW</button>
        </div>

      </div>
    </div>
  )
}

export default Home
