import React from "react";
import "../App.css";
import "../Styles/Home.css";
import "../Styles/Gallery.css";


function Home() {
  return (
    <>
    <h1><span style={{ fontWeight: "bold", color: "black", fontStyle: "italic", fontSize:"3rem",}}> Gallery</span></h1>
    <p> <span style={{ fontWeight: "lighter", color: "black",  fontSize:"1.5rem", marginLeft:"12rem"}}>Check my works and find out why our customers keep on coming back. </span></p>
      <div className="gallery">
        <section className="section5-Gallery"></section>
        </div>
   
    </>
  );
}

export default Home;
