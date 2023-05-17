import React, { useState } from "react";

const Testimoni = () => {
    const [testimoni, setTestimoni] = useState([
        {
          id: 1,
          name: "Yoga Yono",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          name: "Dewi Ayin",
          message: "Praesent bibendum ultrices lacus, id convallis magna tempus sit amet.",
        },
        {
          id: 2,
          name: "Ayin Dewi",
          message: "Praesent bibendum ultrices lacus, id convallis magna tempus sit amet.",
        },
      ]);
  return (
    <div>
      {/* testimoni section*/}
      <section className="py-5 border-bottom">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Customer testimoni</h2>
            <p className="lead mb-0">Our customers love working with us</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              {/* Testimonial 1*/}
              {testimoni.map((index) => (
                <div className="card mb-4" key={index.id}>
                <div className="card-body p-4">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <i className="bi bi-heart text-primary fs-1" />
                    </div>
                    <div className="ms-4">
                      <p className="mb-1">
                        {index.message}
                      </p>
                      <div className="small text-muted">
                        {index.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoni;
