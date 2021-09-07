import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Service =()=>{
    return (
      <>
        <div className="heading_s py-3">
          <h1 className="text-center">Our Services</h1>
        </div>

        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((value) => {
                  return (
                    <Cards
                      key={value.id}
                      imgSrc={value.imgSrc}
                      desc={value.desc}
                      about={value.about}
                      link={value.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Service;