import React from "react";
import { Button } from "../Reusable/Button";
import "../Styles/HeroSection.css";
import "../App.css";

function HeroSection(props) {
  return (
    <>
      <div className="hero-container">
        <p>
          Command attention without a sound. <br />
          Exude elegance among the crowd. <br />
          Let your eyes do the majestic work <br />
          One lash at a time!
        </p>
        <h2>Queens Lashes, Your Royal Signature.</h2>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
