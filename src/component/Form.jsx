import React, { useState } from "react";

const Form = () => {
    const[gambar,setGambar]= useState('')
    const[title,setTitle]= useState('')
    const[descripsi,setDescripsi]= useState('')
    const simpan =()=>{
        setGambar('')
        setTitle('')
        alert('berhasil menyimpan')
    }
  return (
      //user interprice
    <div className="container border p-1">
      <label htmlFor="Nama">
        <input type="text" className="from-control mt-2" placeholder="isikan nama" id="nama" />
      </label>
      <label htmlFor="gambar">
        <input type="text" className="from-control ml-2" placeholder="gambar" id="gambar" value={gambar} onChange={(e)=> setGambar(e.target.value)}/>
        {gambar}
      </label>
      <label htmlFor="title">
        <input type="text" className="from-control mt-2" placeholder="title" id="title" value={title} onChange={(t)=> setTitle(t.target.value)}/>
        {title}
      </label>
      <label htmlFor="Kelamin">
        <input type="checkbox" name="Laki-laki" id="lk" />
        <input type="checkbox" name="Perempuan" id="pr" />
      </label>
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-primary" onClick={simpan}>Simpan</button>
      </div>
    </div>
  );
};

export default Form;
