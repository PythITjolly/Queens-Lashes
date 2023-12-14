import React, { useState, useEffect } from "react";
import '../App.css';
import '../Styles/Subheader.css';
import Subheader from "../Layout/Subheader";
import ServicesCards from "../Layout/ServicesCards";

function Services() {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const scrollButtonStyle = {
      position: "fixed",
      bottom: "40px",
      right: "20px",
      backgroundColor: "#333",
      color: "white",
      width: "40px",
      height: "40px",
      textAlign: "center",
      fontSize: "24px",
      lineHeight: "40px",
      borderRadius: "50%",
      cursor: "pointer",
      display: showScroll ? "block" : "none",
    };
    return (
        <>
        <Subheader />
        <section className="section2-services">
            <ServicesCards/>
        </section>
        <div style={scrollButtonStyle} onClick={scrollToTop}>
        &#9650;
      </div>

        </>
    )
}

export default Services;