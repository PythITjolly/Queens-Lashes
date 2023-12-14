import React from "react";
import Logo from "./../Images/Logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cont-columns">
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>queenslashesnz@gmail.com</li>
            <li>021-100-4728</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Business Hours</h4>
          <ul>
            <li>Monday - Saturday: 9AM - 5PM</li>
            <li>Sunday: Close</li>
            <li>Public Holidays: Close</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>General</h4>
          <ul>
            <li>FAQs</li>
            <li>Terms and Conditions</li>
            <li>Privacy Statement</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100090283854954"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-f App-link"></i>
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fqueens_lashes_chch%3Figshid%3DYTQwZjQ0NmI0OA%253D%253D%26fbclid%3DIwAR0OPThrWtcnsm7y2umf-3PTWBOys-bRBnyWP6utDn0y6PPe3N9AQ1YUhK0&h=AT2qydi_nVqNIxQyFKTrFTS7vjWSUSeDy_uukpWdkrgyKWbTAswjn0FmA8S7bUzHRRacF71EinbiNzr00Y7C-NMH-RGQ8tkblvAZjO0W8d2Izi9LcNgyY3onHyOxExobYL3R_XGXc_kedLt7nPf3LUs9pmI"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <br />
            <br />
            <br />
            <small className="text-center mt-5" style={{ color: "#8C8587" }}>
              <a href="/">
                <img src={Logo} alt="" width="100px" />
              </a>
              <br /> Queens Lashes 2023. All rights reserved
              <br />
              Made with <a href ="https://pythitjolly.github.io" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-heart-o" style={{ color: "#8C8587" }}></i></a>by
              Jolly L. Cusi
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
