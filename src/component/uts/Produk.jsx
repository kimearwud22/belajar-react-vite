import React, { useState } from "react";

export default function Produk() {
  const [peringatan, setPeringatan] = useState(false);
  const [produk, setProduk] = useState([
    {
      id: 1,
      nama: "Produk 1",
      deskripsi: "ini adalah deskripsi produk 1",
      image: "./img/acer.jpg",
    },
    {
      id: 2,
      nama: "Produk 2",
      deskripsi: "ini adalah deskripsi produk 2",
      image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
    {
      id: 3,
      nama: "Produk 3",
      deskripsi: "ini adalah deskripsi produk 3",
      image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
  ]);

  const handleClick = () => {
    setPeringatan(alert("Selamat anda telah membeli produk ini"));
  };
  return (
    <div className="container px-4 px-lg-5">
      {/* Content Row*/}
      <div className="row gx-4 gx-lg-5">
        {produk.map((index) => (
          <div className="col-md-4 mb-5" key={index.id}>
            <div className="card h-100">
              <div className="card-body">
                <div className="small text-muted">Produk Kopi</div>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={index.image}
                  alt="..."
                />
                <h2 className="card-title">{index.nama}</h2>
                <p className="card-text">{index.deskripsi}</p>
              </div>
              <div className="card-footer">
                <a
                  className="btn btn-primary btn-sm"
                  href="#!"
                  onClick={handleClick}
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
