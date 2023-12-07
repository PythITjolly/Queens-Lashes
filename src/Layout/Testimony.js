import React from "react";
import "../Styles/Testimony.css";
import CardItem from "../Reusable/CardItem";
import testimony1 from "../Images/classic extension 2.jpeg";
import testimony2 from "../Images/image0.png";
import testimony3 from "../Images/image1.png";
import testimony4 from "../Images/image2.png";
import testimony5 from "../Images/classic extension 3.jpeg";
import testimony6 from "../Images/testimony6.jpeg";
import testimony7 from "../Images/hybrid extension2.jpeg";
import LogoImage from "../Images/Logo.png";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={testimony1}
                text="I love how naturally my lash looked after the procedure. My friends and I loved it!"
                label="Carol Prima"
                path="/gallery"
              />
              <CardItem
                src={testimony2}
                text="Omi is easy to talk to and very gentle. I had a good nap while she's working on my lashes."
                label="Ellen Napilan"
                path="/gallery"
              />
              <CardItem
                src={testimony3}
                text="I love the hypo-allergenic products!"
                label="Savanna Stagg"
                path="/gallery"
              />
              <CardItem
                src={testimony4}
                text="The place is easy to find, clan and comfy. I love the natural looking result."
                label="Francesca Smith"
                path="/gallery"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={testimony5}
                text="The best spend I ever had! Will definitely do it again!"
                label="Christine Kaurr"
                path="/gallery"
              />
              <CardItem
                src={testimony6}
                text="Very accomodating of my request. All natural products and the end result is superb!"
                label="Samantha Kim"
                path="/gallery"
              />
              <CardItem
                src={testimony7}
                text="I'm speechless! I just so loved it!"
                label="Miana Jin"
                path="/gallery"
              />
              <CardItem
                src={LogoImage}
                text="Experience the majestic lash works for a queenly you."
                label="Reserve your spot!"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
