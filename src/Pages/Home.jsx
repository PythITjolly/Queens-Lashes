import React, { useState, useEffect } from "react";
import "../App.css";
import "../Styles/Home.css";
import HeroSection from "../Layout/HeroSection";
import Cards from "../Layout/Cards";
//import Testimony from "../Layout/Testimony";
import Testimonials from "../Layout/Testimonials";

function Home() {
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
      <section className="section1-Home">
        <HeroSection />
      </section>
      <div className="Home">
        <section className="section2-Home">
          <h2>About</h2>
          <p>
            “The eyes are the window to the soul” - William Shakespeare
            <br />
            <br />
            This quote inspired me to master my craft on modern beauty
            enhancement focusing on eye lashes to make the eyes stand out and
            speak without saying a word. 
            <br />
            
            Queens Lashes started last March 2023. New to the business as it is
            but my knowledge of the system and practice has strated since 2015
            when I received my diploma for the beauty course in Korea. Covid 19
            enlightened and pushed me to pursue my passion so I can enjoy the
            best of both worlds of effectively balancing managing my work,
            looking after my small family, and utilising being an instrument in
            spreading beauty, unleashing the inner queen in every women.
          </p>
        </section>
        <section className="section3-Home">
          <h2>Services Offered</h2>
          <p>
            To ensure quality of each works done, my services are limited to
            eyelash extension and eye lash lift. <br></br>
            <br />Whether you’re a
            first-timer or already acustomed to lash enhancements, there’s one
            that will fit you best. Check the description to help you decide
            what’s best for you.
          </p>
          <Cards />
        </section>
        <section className="section4-Home"></section>
        <section className="section5-Home">
          <h2>Testimonials</h2>
          <p> Check what our lovely customers have to say.</p>
        </section>

        <Testimonials />
      </div>
      <div style={scrollButtonStyle} onClick={scrollToTop}>
        &#9650;
      </div>
    </>
  );
}

export default Home;
