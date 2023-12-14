import React from "react";
import "../Styles/ServicesCards.css";
import CardItem from "../Reusable/CardItem";
import ClassicImage from "../Images/Classic.png";
import VolumeImage from "../Images/Volume.png";
import HybridImage from "../Images/Hybrid.png";
import LiftImage from "../Images/Lash Lift.png";
import InfillsImage from "../Images/Lash Infills.png";
import LogoImage from "../Images/white logo.png";
import ExtraImage from "../Images/Extra.png";

function ServicesCards() {
  return (
    <>
      <div className="ServicesCards">
        <br></br>
        <h1>Lash Extension</h1>
        <div className="ServicesCards__container">
          <div className="ServicesCards__wrapper">
            <ul className="ServicesCards__items">
              <CardItem
                src={ClassicImage}
                text={
                  <div>
                    
                      Application: 1:1 <br />
                      (1 natural eyelash to 1 extension) <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>Basic Classic:{" "}</span>
                      covers 70% of the natural lashes <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>NZD70 <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Full Classic:{" "} </span>
                      covers 100% of the natural lashes <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>NZD80 </span><br />
                      <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "}</span>
                      1hr{" "}
                  </div>
                }
                label="Classic Extension"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={VolumeImage}
                text={
                  <div>
                      Application: 3:1 <br />
                      (1 natural eyelash to 3 extensions) <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>Russian:{" "}</span>
                      covers 70% of the natural lashes <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>NZD120 <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Full Russian:{" "}</span>
                      covers100% of the natural lashes <br />
                    <span style={{ fontWeight: "bold", color: "black" }}>NZD150 <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "}</span>
                      3 - 4 hrs{" "}
                  </div>
                }
                label="Volume Extension "
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={HybridImage}
                text={
                  <div>
                      Combination of classic and volume extension. <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>NZD100 <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "} </span>
                      1 - 2 hrs
                  </div>
                }
                label="Hybrid Extension"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="ServicesCards">
        <br></br>
        <h1>Lash Infills</h1>
        <div className="ServicesCards__container">
          <div className="ServicesCards__wrapper">
            <ul className="ServicesCards__items">
              <CardItem
                src={InfillsImage}
                text={
                  <div>
                    3 weeks infill <br />
                    <span style={{ fontWeight: "bold", color: "black" }}>NZD50 <br />
                    </span>
                      Must have at least 50% of lashes remaining from the
                      previous session (classic extension)
                      <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "}</span>
                      30 min - 1hr
                  </div>
                }
                label="Classic Extension "
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={InfillsImage}
                text={
                  <div>
                    Volume Extension <br />
                    3 weeks infill <br />
                    NZD120 <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Must have at least 50% of lashes remaining from the
                      previous Russian Volume Full Set session
                      <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "}</span>
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      2 - 3 hrs
                    </span>
                  </div>
                }
                label="Volume Extension"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={InfillsImage}
                text={
                  <div>
                    Hybrid Extension <br />
                    3 weeks infill <br />
                    NZD70 <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Must have at least 50% of lashes remaining from the
                      previous set.
                      <br />
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>Duration:{" "}</span>
                      30 min - 1hr
                  </div>
                }
                label="Hybrid Extension "
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="ServicesCards">
        <br></br>
        <h1>Lash Lift & Other Services</h1>
        <div className="ServicesCards__container">
          <div className="ServicesCards__wrapper">
            <ul className="ServicesCards__items">
              <CardItem
                src={LiftImage}
                text={
                  <div>
                    <span style={{ fontWeight: "bold", color: "black" }}>Lash Lift - NZD50 </span> (set under $70)<br />
          
                      <span style={{ fontWeight: "bold", color: "black" }}>Lasht Lift with Treatment- NZD60<br />
                    Lasht Lift & Tint - NZD70</span>
                    
                     <br />(set under $80) <br />
                    
                     <span style={{ fontWeight: "bold", color: "black" }}> Duration:</span> 30 min - 1hr
                     </div>
                }
                label="Lash Lift"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={ExtraImage}
                text={
                  <div>
                    <span style={{ fontWeight: "bold", color: "black" }}>Lash Lift with Treatment - NZD60</span><br/>
                    <span style={{ fontWeight: "bold", color: "black" }}>Lash Lift & Tint - NZD70</span>
                        <br />(set under $80) covers100% of the natural lashes <br />
                      <span style={{ fontWeight: "bold", color: "black" }}>NZD150</span> <br />
                    <span style={{ fontWeight: "bold", color: "black" }}>Duration:</span> 3 - 4 hrs
                  </div>
                }
                label="Other Services"
                path="/https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={LogoImage}
                text={
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "26px", fontStyle: 'italic', color: "black" }}>
                      Reserve your spot! <br />
                    </span>
                  </div>
                }
                label=""
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCards;
