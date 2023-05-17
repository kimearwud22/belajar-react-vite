import React, { useState } from "react";

export default function Home() {
    const [namaPerusahaan, setNamaPerusahaan] = useState("Ayin Kopi");
    const [deskripsi, setDeskripsi] = useState("Kopi yang enak dan berkualitas, dengan harga yang terjangkau dan terjangkau");
    const [gambar, setGambar] = useState("https://dummyimage.com/900x400/dee2e6/6c757d.jpg");

  return (
    <div>
      {/* Page Content*/}
      <div className="container px-4 px-lg-5">
        {/* Heading Row*/}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="./img/acer.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">{namaPerusahaan}</h1>
            <p>
              {deskripsi}
            </p>
            <a className="btn btn-primary" href="#!">
              Call to Action!
            </a>
          </div>
        </div>
        {/* Call to Action*/}
        <div className="card text-white bg-dark my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">
              This call to action card is a great place to showcase some
              important information or display a clever tagline!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
