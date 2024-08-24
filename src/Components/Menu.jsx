import React from "react";
import "./Card.css";
import Model from "./Model";
import { Sdatat } from "./Sdata";
function Menu() {
  return (
    <div>
      <h1 className="text-center">Our Menu</h1>
      <div className="container">
        <div className="row">
          {Sdatat.map((val) => {
            return (
              <div className="col-lg-4  col-md-6 col-sm-12 my-3">
                <div className="card menu-card">
                  <img src={val.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.price}</p>
                    <button
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Model />
    </div>
  );
}

export default Menu;
