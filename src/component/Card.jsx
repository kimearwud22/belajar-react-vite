import React from "react";

const Formulir = (props) => {
  return (
    <div className="container" style={{ border: 'solid',padding:'20px' }}>
      <h3>Kartu anggota</h3>
      <div>
        <label htmlFor="nama">Nama :</label>
        <p>{props.nama}</p>
      </div>
      <div>
        <label htmlFor="alamat">Alamat :</label>
        <p>{props.alamat}</p>
      </div>
    </div>
  );
};

export default Formulir