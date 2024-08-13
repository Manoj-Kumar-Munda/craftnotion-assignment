import React from "react";
import nike from "../assets/nike_logo.png";
import chanel from "../assets/chanel.png";
import lv from "../assets/lv.png";
import armani from "../assets/Armani.png";
import puma from "../assets/puma.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Brands Available</h1>
        <p>Famous brands</p>
        <p className="description">
          We have available stock for all famous brands you can order from our
          website.
        </p>
      </div>

      <div className="logo-container">
        <div className="brand__logo" style={{ width:"128px"}}>
          <img src={nike} style={{width:"100%" }} />
        </div>
        <div className="brand__logo" style={{ width:"128px"}}>
          <img src={chanel} style={{width:"100%" }} />
        </div>
        <div className="brand__logo" style={{ width:"128px"}}>
          <img src={lv} style={{width:"100%" }} />
        </div>
        <div className="brand__logo" style={{ width:"128px"}}>
          <img src={armani} style={{width:"100%" }} />
        </div>

        <div className="brand__logo" style={{ width:"128px"}}>
          <img src={puma} style={{width:"100%" }} />
        </div>
      </div>



    </div>
  );
};

export default Footer;
