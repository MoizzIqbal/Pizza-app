import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="text-center bg-dark">
 
  <div className="container pt-4">
   
    <section className="mb-4">
     
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f  text-light"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter text-light"></i></a>

     
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google  text-light"></i ></a>

     
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram  text-light"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin  text-light"></i></a>
   
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github  text-light"></i></a>
    </section>

  </div>

  <div className="text-center p-3  text-light">
    © 2020 Copyright:
    <a className=" text-light " href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>
    </div>
  )
}

export default Footer
