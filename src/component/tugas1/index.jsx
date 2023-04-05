import React from "react";
import image from "./img/acer.jpg";
import image1 from "./img/lenovo.jpg";
import image2 from "./img/laptophp.jpg";
import image3 from "./img/laptophuawey.jpg";
import CardTutorial from "./card";
import Header from "../Header";
import Form from "../Form";
import ReactState from "../pertemuan/ReactState";

const Tempat = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <h2>ini adalah belajar state</h2>
          <ReactState />
        </div>
        <div>
          <h2>Input catatan</h2>
          <Form/>
        </div>
        <div className="row mt-3">
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3 ">
            <CardTutorial
              descripsi={"Lenovo keluaran 2029"}
              title={"laptop Lenovo"}
              img={image1}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Acer keluaran 2039"}
              title={"laptop acer"}
              img={image}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Hp keluaran 2129"}
              title={"laptop HP"}
              img={image2}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Huawey keluaran 2089"}
              title={"laptop acer"}
              img={image3}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Lenovo keluaran 2029"}
              title={"laptop Lenovo"}
              img={image1}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Acer keluaran 2039"}
              title={"laptop acer"}
              img={image}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Hp keluaran 2129"}
              title={"laptop HP"}
              img={image2}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Huawey keluaran 2089"}
              title={"laptop acer"}
              img={image3}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Lenovo keluaran 2029"}
              title={"laptop Lenovo"}
              img={image1}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Acer keluaran 2039"}
              title={"laptop acer"}
              img={image}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Hp keluaran 2129"}
              title={"laptop HP"}
              img={image2}
            />
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <CardTutorial
              descripsi={"Huawey keluaran 2089"}
              title={"laptop acer"}
              img={image3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempat;
