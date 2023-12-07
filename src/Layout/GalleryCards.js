import React from "react";
import "../Styles/GalleryCards.css";
import GalleryItems from "../Reusable/GalleryItems";
import image1 from "../Images/Classic Extension1.jpeg";
import image2 from "../Images/hybrid extension2.jpeg";

function GalleryCards() {
  return (
    <div className="gallery">
      <h1>Check out my works.</h1>
      <div className="gallery__container">
        <div className="gallery__wrapper">
          <ul className="gallery__items">
            <GalleryItems src={image1}/>
            <GalleryItems src={image2} />
            <GalleryItems src={image2} />
           
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default GalleryCards;
