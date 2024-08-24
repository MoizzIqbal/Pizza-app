import React from 'react'
import pizzaleft from '../Images/pizzaLeft.jpg'
import './Contact.css'

function Contact() {
  return (
    <div>
    <div className="container-fluid my-auto">
      <div className="row">
        <div className="col-md-6"> 
        <img src={pizzaleft} alt="pizza" className='pizzaleft' />
        </div>
        <div className="col-md-6 my-auto">
          <h1 className=''>Contact Us</h1>
         <form action="" >
          <div className="container gap-5">
            <div className="row gap- mt-3">
              <div className="col-12">
                 <label for="inputEmail4" className="form-label fw-bold">Full Name</label><br />
                 <input type="text" class="input w-100" id="inputEmail4" placeholder='Enter Full Name'></input>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                 <label for="inputEmail4" className="form-label fw-bold">Email</label>
                 <input type="email" className="input w-100" id="inputEmail4" placeholder='Enter Email'></input>
              </div>
            </div>
            {/* <label htmlFor="Message" className='mt-3 fw-bold'>Message</label> */}
            <div className="form-floating">
           <textarea className="w-100 mt-3 input"  placeholder='Message...' style={{height: "100px"}}></textarea>

  {/* <label for="floatingTextarea2">Message</label> */}
        </div>
          <button className='btn btn-dark mt-3'>Send Message</button>
          </div>
         </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
