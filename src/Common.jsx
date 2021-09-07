import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row home_container d-flex justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 pt-3 py-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column align-items-start home_l">
                  <h2 className="pe-3 me-0">
                    {props.text}
                    <strong>WebDevs</strong>
                  </h2>
                  <p className="my-3 ps-0">
                    We are team of experienced Software and web developers.
                  </p>
                  <div className="btn_get_started">
                    <NavLink to="/service" className="px-3 mt-2">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 py-6 d-flex justify-content-center flex-column align-items-end order-1 order-lg-2 home_r">
                  <img 
                    src={props.imgSrc}
                    className="img-fluid header_img animated"
                    alt={props.alternate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
