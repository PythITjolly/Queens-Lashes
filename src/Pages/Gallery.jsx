import React from "react";
import "../App.css";
import "../Styles/Home.css";
import "../Styles/Gallery.css";


function Home() {
  return (
    <>
    <h1><span style={{ fontWeight: "bold", color: "black", fontStyle: "italic", fontSize:"3rem", }}> Gallery</span></h1>
      <div className="gallery">
        <section className="section4-Home"></section>
        <section className="section5-Gallery"></section>
        </div>
   
    </>
  );
}

export default Home;
