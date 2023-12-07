import React from "react";
import "../Styles/Subheader.css";
import "../App.css";

function Subheader(props) {
  return (
    <>
      <div className="subheader-container">
        <h2>Our Services</h2>
        <p>Choosing the right eyelash service can be a challenge. Here's a preview of what we offer to help you
choose the style that suits you best.
<br/>
<br/>
Classic extensions are subtle, while volume extensions are bolder. Hybrid extensions combine both 
techniques. Lash lift improves the original lashes’ volume, curl and length. Whatever you choose, 
we can guarantee natural-looking  lashes that will definitely enhance our beautiful eyes.
        </p>
        <div className="subheader-btns">
          
        </div>
      </div>
    </>
  );
}

export default Subheader;
