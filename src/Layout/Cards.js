import React from "react";
import "../Styles/Cards.css";
import CardItem from "../Reusable/CardItem";
import ClassicImage from "../Images/Classic.png";
import VolumeImage from "../Images/Volume.png";
import HybridImage from "../Images/Hybrid.png";
import LiftImage from "../Images/Lash Lift.png";
import InfillsImage from "../Images/Lash Infills.png";
import LogoImage from "../Images/white logo.png";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Lash Extension</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={ClassicImage}
                text="Application: 1:1 
              (1 natural eyelash to 1 extension)
              Maximum volume is the amount of 
              your natural lashes.
              Great in adding lash length."
                label="Classic"
                path="/services"
              />
              <CardItem
                src={VolumeImage}
                text="Application: 3:1 
              (1 natural eyelash to 3 extensions)
              Great way to add volume and
              definition to your eye look."
                label="Volume"
                path="/services"
              />
              <CardItem
                src={HybridImage}
                text="Combination of classic and volume
              extension. It’s a timeless definition
              of classic lashes with added volume."
                label="Hybrid"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="cards">
        <h1>Lash Lift</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={LiftImage}
                text="A revolutionary technique that gives
              your natural lashes curl, length and
              natural volume. Letting you say goodbye
              to curlers that can cut your lashes
              and wake up to gorgeous lashes."
                label="Lash Lift"
                path="/services"
              />
              <CardItem
                src={InfillsImage}
                text="Natural lashes and the lash extension naturally
              sheds off. The lash infill technique allows to fill
              in the gaps. Advisable to be done within 2-3 
              weeks after the lash extension."
                label="Lash Infills"
                path="/services"
              />
              <CardItem
                src={LogoImage}
                text="Experience the majestic lash works for a queenly you."
                label="Reserve your spot!"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM"
                target="_blank"
                rel="noopener noreferrer"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
