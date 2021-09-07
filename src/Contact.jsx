import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname:"",
    lname:"",
    mnumbar:"",
    mail:"",
    message:""
  });
  const EventChange =(event)=>{
    const{name,value}= event.target;
    setData((preVal)=>{
          return {...preVal,
          [name]:value}
    });
  };
  const Submit = (e)=>{
    e.preventDefault();
    alert(`your name is ${data.fname} ${data.lname}. Your entered message "${data.message}", is submitted properly. We will contact you in a while on this number ${data.mnumber}. `)

  }
  return (
    
    <>
      <div>
        <h2 className="text-center">Contact us</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-6 mx-auto">
            <form className="row g-3 needs-validation pb-4" onSubmit={Submit}>
              <div className="col-12">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="First Name"
                  name="fname"
                  onChange={EventChange}
                  value={data.fname}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="last Name"
                  name="lname"
                  onChange={EventChange}
                  value={data.lname}
                />
              </div>
              <div className="col-12">
                <label htmlFor="validationCustom03" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="xyz@gmail.com"
                  required
                  name="mail"
                  onChange={EventChange}
                  value={data.mail}
                />
              </div>
              <div className="col-12">
                <label htmlFor="validationCustom04" className="form-label">
                  Mobile number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom04"
                  name="mnumber"
                  onChange={EventChange}
                  value={data.mnumber}
                />
              </div>
              
              <div className="col-12">
                <label htmlFor="validationCustom05" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required
                  name="message"
                  onChange={EventChange}
                  value={data.message}
                />
              </div>
              <div className="col-12 pt-3 ">
                <button className="btn btn-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;