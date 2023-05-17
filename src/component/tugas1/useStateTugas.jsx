import React, { useState } from "react";

const UseStateTugas = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomor, setNomor] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // harga dari option product
    let harga = 0;
    if (pesanan === "laptop") {
      harga = 5000000;
    } else if (pesanan === "smartphone") {
      harga = 3000000;
    } else if (pesanan === "smartwatch") {
      harga = 2000000;
    } else if (pesanan === "headphone") {
      harga = 1000000;
    } else {
      harga = 0;
    }
    // total harga
    setTotal(harga * jumlah);
    alert(`Detail Pemesanan
Nama Pelanggan : ${nama}
Alamat : ${alamat}
Nomor Telepon : ${nomor}
Pesanan : ${pesanan}
Jumlah : ${jumlah}
Total : ${total}`);
  };

  return (
    <div className="card-header m-3">
      <h1 className="text-center">Form Pembelian Laptop</h1>
      <form onSubmit={handleSubmit} className="card-header">
        <div className="form-group">
          <label>Nama Pelanggan</label>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Alamat</label>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nomor Telepon</label>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nomor Telepon"
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pesanan</label>
          <select
            className="form-control"
            value={pesanan}
            onChange={(e) => setPesanan(e.target.value)}
          >
            <option value="">Pilih Pesanan</option>
            <option value="laptop">Laptop</option>
            <option value="smartphone">Smartphone</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
        <div className="form-group">
          <label>Jumlah</label>
          <input
            type="number"
            className="form-control"
            placeholder="Masukkan Jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-1">
          Submit
        </button>
      </form>
      <h1 className="text-center mt-3">Hasil Pembelian</h1>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Nama Pelanggan</td>
            <td>{nama}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>{alamat}</td>
          </tr>
          <tr>
            <td>Nomor Telepon</td>
            <td>{nomor}</td>
          </tr>
          <tr>
            <td>Pesanan</td>
            <td>{pesanan}</td>
          </tr>

          <tr>
            <td>Jumlah</td>
            <td>{jumlah} Unit</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Rp.{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UseStateTugas;
