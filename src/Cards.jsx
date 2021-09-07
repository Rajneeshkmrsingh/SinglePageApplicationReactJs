import React from 'react';
import { NavLink } from 'react-router-dom';


const Cards =(props)=>{
    return (
      <>
        <div className="col-10 col-md-6 col-lg-4 mx-auto">
          <div className="card" style={{ width: "18rem" }}>
            <img src={props.imgSrc} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{props.desc}</h5>
              <p className="card-text">{props.about}</p>
              <NavLink to="/contact" className="btn btn-primary">
                {props.link}
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
};
export default Cards;