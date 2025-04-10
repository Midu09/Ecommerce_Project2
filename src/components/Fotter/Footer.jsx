import React from "react";
import "./Footer.css";
import instagram_icon from "../assets/instagram_icon.png";
import pritesicon_icon from "../assets/pintester_icon.png";
import whatapp_icon from "../assets/whatsapp_icon.png";
import footer_logo from "../assets/logo_big.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPER</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pritesicon_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - Do not Reup</p>
      </div>
    </div>
  );
};

export default Footer;
