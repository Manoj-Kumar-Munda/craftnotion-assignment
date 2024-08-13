import React from "react";
import { CiDroplet } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import heroImg from "../assets/skate_boy.png";
const MainContent = () => {
  return (
    <div className="main">
      <div className="img">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="hero-content">
        <h1 className="hero-text">
          Skateboarding <br />
          done right
        </h1>

        <p className="para">
          Wooden longboard in Best
          <br />
          quality for skateboard lovers
        </p>

        <div className="order">
          <span className="order-text">Order Now</span>
        </div>
      </div>

      <div className="product-desc">
        <div className="product__desc__item">
          <div className="icon">
            <CiDroplet size={32} color="#fff" />
          </div>
          <div className="desc__text">
            <h1>Color</h1>
            <p>Yellow</p>
          </div>
        </div>

        <div className="product__desc__item">
          <div className="icon">
            <GiWeight size={32} color="#fff" />
          </div>
          <div className="desc__text">
            <h1>Weight</h1>
            <p>8 kg</p>
          </div>
        </div>

        <div className="product__desc__item">
          <div className="icon">
            <TfiRulerPencil size={32} color="#fff" />
          </div>
          <div className="desc__text">
            <h1>Dimension</h1>
            <p>8.25 x 31.875</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
