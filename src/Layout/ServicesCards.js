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
                    Classic Extension <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Application: 1:1 <br />
                      (1 natural eyelash to 1 extension) <br />
                    </span>
                    Basic Classic:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      covers 70% of the natural lashes <br />
                    </span>
                    NZD70 <br />
                    <span style={{ fontWeight: "lighter" }}></span>Full Classic:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      covers100% of the natural lashes <br />
                    </span>
                    NZD80 <br />
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      1hr
                    </span>{" "}
                  </div>
                }
                label="Book Now"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={VolumeImage}
                text={
                  <div>
                    Volume Extension <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Application: 3:1 <br />
                      (1 natural eyelash to 3 extensions) <br />
                    </span>
                    Russian:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      covers 70% of the natural lashes <br />
                    </span>
                    NZD120 <br />
                    <span style={{ fontWeight: "lighter" }}></span>Full Russian:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      covers100% of the natural lashes <br />
                    </span>
                    NZD150 <br />
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      3 - 4 hrs
                    </span>{" "}
                  </div>
                }
                label="Book Now"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={HybridImage}
                text={
                  <div>
                    Hybrid Extension <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Combination of classic and volume extension. <br />
                    </span>
                    NZD100 <br />
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      1 - 2 hrs
                    </span>
                  </div>
                }
                label="Book Now"
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
                    Classic Extension <br />
                    3 weeks infill <br />
                    NZD50 <br />
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      Must have at least 50% of lashes remaining from the
                      previous session (classic extension)
                      <br />
                    </span>
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      30 min - 1hr
                    </span>
                  </div>
                }
                label="Book Now"
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
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      2 - 3 hrs
                    </span>
                  </div>
                }
                label="Book Now"
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
                    Duration:{" "}
                    <span style={{ fontWeight: "lighter", fontSize: "14px" }}>
                      30 min - 1hr
                    </span>
                  </div>
                }
                label="Book Now"
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
                    Lash Lift - NZD50 
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      (set under $70)<br />
                    </span>
                    Lasht Lift with Treatment- NZD60<br />
                    Lasht Lift & Tint - NZD70
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                     (set under $80) <br />
                    </span>
                    Duration: <span style={{ fontWeight: "lighter", fontSize: "14px" }}>30 min - 1hr
                    </span> </div>
                }
                label="Book Now"
                path="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={ExtraImage}
                text={
                  <div>
                    Other Services <br />
                    Lash Lift with Treatment - NZD60<br/>
                    Lash Lift & Tint - NZD70
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      (set under $80)<br />
                    </span>
                    <span style={{ fontWeight: "lighter", fontSize: "12px" }}>
                      covers100% of the natural lashes <br />
                    </span>
                    NZD150 <br />
                    Duration: 3 - 4 hrs
                  </div>
                }
                label="Book Now"
                path="/https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01_iFrj-tbsoh0Ux6m4QFLzlm0nj1shrrBA-iMPwU9qA1dwf3UI-tvJ69hbx2rZYxb1A4u84NM?gv=true"
              />

              <CardItem
                src={LogoImage}
                text={
                  <div>
                    <span style={{ fontWeight: "bolder", fontSize: "26px", fontStyle: 'italic', }}>
                      Reserve your spot! <br />
                    </span>
                  </div>
                }
                label="Book Now"
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
