import React from "react";
import { Link } from "react-router-dom";
import resim1 from "../../assets/5.jpeg";
import resim2 from "../../assets/1.jpg";
import resim3 from "../../assets/2.jpg";
import resim4 from "../../assets/3.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
            <h1>Sofranın Taze Lezzeti</h1>
            <p>Yazılar gelecek kaan dan inşallah</p>
            <Link to="/Ürünlerimiz">
              <button>Ürünlerimiz</button>
            </Link>
            <div className="container-img">
            <div><img src={resim1} className="images" alt="resim1"></img></div>
            <div><img src={resim2} className="images" alt="resim2"></img></div>
            <div><img src={resim3} className="images" alt="resim3"></img></div>
            <div><img src={resim4} className="images" alt="resim4"></img></div>
            </div>
            </div>
        <div>
          <h1>Sütün Sanata Dönüştüğü Yolculuk!</h1>
          <p>yazı gelecek</p>
          <Link to="/Ürünlerimiz">
            <button>Ürünlerimiz</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;