import React from "react";
import "../Styles/Testimonial.css";
import TestimonialItems from "../Reusable/TestimonialItems";
import testimony1 from "../Images/classic extension 2.jpeg";
import testimony2 from "../Images/image0.png";
import testimony3 from "../Images/image1.png";
import testimony4 from "../Images/image2.png";
import testimony5 from "../Images/classic extension 3.jpeg";
import testimony6 from "../Images/testimony6.jpeg";
import testimony7 from "../Images/hybrid extension2.jpeg";

function Testimonials() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial__container">
          <div className="testimonial__wrapper">
            <ul className="testimonial__items">
              <TestimonialItems
                 src={testimony1}
                 text="I love how naturally my lash looked after the procedure. My friends and I loved it!"
                 label="Carol Prima"
              />
              <TestimonialItems
                src={testimony2}
                text="Omi is easy to talk to and very gentle. I had a good nap while she's working on my lashes."
                label="Ellen Napilan"
              />
              <TestimonialItems
                src={testimony3}
                text="I love the hypo-allergenic products!"
                label="Savanna Stagg"
                
              />
              <TestimonialItems
                src={testimony4}
                text="The place is easy to find, clan and comfy. I love the natural looking result."
                label="Chesca Smith"
               
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <TestimonialItems
                src={testimony5}
                text="The best spend I ever had! Will definitely do it again!"
                label="Christine Kaurr"
                
              />
              <TestimonialItems
                src={testimony6}
                text="Very accomodating of my request. All natural products and the end result is superb!"
                label="Samantha Kim"
                
              />
              <TestimonialItems
                src={testimony7}
                text="I'm speechless! I just so loved it!"
                label="Miana Jin"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
