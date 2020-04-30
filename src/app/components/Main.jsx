import React from "react";
import telephone from "../../image/main/telephone.png";
import arrowCheck from "../../image/main/check/arrowCheck.png";
import circleCheck from "../../image/main/check/circleCheck.png";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { TimelineMax, TimelineLite, gsap } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import PointMain from "./Points/PointMain.jsx";

ScrollMagicPluginGsap(ScrollMagic, TimelineLite, TimelineMax);

gsap.registerPlugin(MotionPathPlugin);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.myTween = gsap.timeline();
    this.controller = new ScrollMagic.Controller();
    this.path = null;
    this.pointBlue = null;
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#scrollStarts",
      duration: "300%",

      triggerHook: 0.6,
    })
      .setTween(this.myTween)
      .addTo(this.controller);
    this.myTween.to(this.pointBlue, {
      motionPath: this.path,
      ease: 0.03,
      speed: 0,
    });
  }

  render() {
    return (
      <div className="main" id="services">
        <div className="container">
          <div className="point-line animation" id="scrollStarts">
            <div className="point-blue ">
              <div
                id="myElement"
                className="point-blue-animate"
                // ref={this.pointBlue}
                ref={(div) => (this.pointBlue = div)}
              >
                <PointMain />
              </div>
            </div>
            <div className="blue-line">
              <svg
                width="664"
                height="1216"
                viewBox="0 0 664 1216"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  // ref={this.path}
                  ref={(div) => (this.path = div)}
                  d="M22.9998 1C22.9998 1 649.558 119 663 589.542C655.833 1135 1 1215 1 1215"
                  stroke="#29A0EC"
                />
              </svg>
            </div>
          </div>

          <div className="track">
            <div className="box circleOutBox">
              <div className="circleInner">
                <div className="circleInnerBackground"></div>
              </div>
              <div className="circleInnerImage">
                <svg
                  width="398"
                  height="398"
                  viewBox="0 0 398 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M398 199C398 308.905 308.905 398 199 398C89.0953 398 0 308.905 0 199C0 89.0953 89.0953 0 199 0C308.905 0 398 89.0953 398 199ZM333 199.5C333 273.23 273.23 333 199.5 333C125.77 333 66 273.23 66 199.5C66 125.77 125.77 66 199.5 66C273.23 66 333 125.77 333 199.5Z"
                    fill="#EBF3ED"
                  />
                </svg>
              </div>
              <div className="circleInnertelephone">
                <img src={telephone} alt="" />
              </div>
            </div>
            <div className="trackContainer">
              <h1>Track every trip you make </h1>
              <h2>
                Every one of your trips is captured immediately and is never
                forgotten.
              </h2>
              <ul className="trackList">
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li> No signal dropout</li>
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li>No missed trips</li>
              </ul>
              <button className="trackButton">
                <p className="trackButtonText">Start Free Trial</p>
                <div className="arrow">
                  <svg
                    width="25"
                    height="6"
                    viewBox="0 0 25 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* second block whith telephone */}

          <div className="classify">
            <div className="trackContainer">
              <h1>Classify with a single swipe </h1>
              <h2 className="secondTelephoneh2">
                Swipe right for business. Swipe left for personal. It’s as easy{" "}
                <br /> as that.
              </h2>
              <ul className="trackList">
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li> Review trips on the go</li>
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li>Classify journeys in seconds </li>
              </ul>
              <button className="trackButton">
                <p className="trackButtonText">lean more</p>
                <div className="arrow">
                  <svg
                    width="25"
                    height="6"
                    viewBox="0 0 25 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="box circleOutBox">
              <div className="circleInner">
                <div className="circleInnerBackground"></div>
              </div>
              <div className="circleInnerImage">
                <svg
                  width="398"
                  height="398"
                  viewBox="0 0 398 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M398 199C398 308.905 308.905 398 199 398C89.0953 398 0 308.905 0 199C0 89.0953 89.0953 0 199 0C308.905 0 398 89.0953 398 199ZM333 199.5C333 273.23 273.23 333 199.5 333C125.77 333 66 273.23 66 199.5C66 125.77 125.77 66 199.5 66C273.23 66 333 125.77 333 199.5Z"
                    fill="#EBF3ED"
                  />
                </svg>
              </div>
              <div className="circleInnertelephone">
                <img src={telephone} alt="" className="transformTelephone" />
              </div>
            </div>
          </div>

          {/* third block whith telephone */}

          <div className="claim">
            <div className="box circleOutBox">
              <div className="circleInner">
                <div className="circleInnerBackground"></div>
              </div>
              <div className="circleInnerImage">
                <svg
                  width="398"
                  height="398"
                  viewBox="0 0 398 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M398 199C398 308.905 308.905 398 199 398C89.0953 398 0 308.905 0 199C0 89.0953 89.0953 0 199 0C308.905 0 398 89.0953 398 199ZM333 199.5C333 273.23 273.23 333 199.5 333C125.77 333 66 273.23 66 199.5C66 125.77 125.77 66 199.5 66C273.23 66 333 125.77 333 199.5Z"
                    fill="#EBF3ED"
                  />
                </svg>
              </div>
              <div className="circleInnertelephone">
                <img src={telephone} alt="" />
              </div>
            </div>
            <div className="trackContainer">
              <h1>Claim your money back with ease</h1>
              <h2>
                Claiming mileage has never been so easy, with all calculations
                done for you.
              </h2>
              <ul className="trackList">
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li> 100% HMRC compliance</li>
                <div className="checkContainer">
                  <div className="check">
                    <img src={circleCheck} alt="" />
                  </div>
                  <div className="checkArrov">
                    <img src={arrowCheck} alt="" />
                  </div>
                </div>{" "}
                <li>All logs in one place</li>
              </ul>
              <button className="trackButton">
                <p className="trackButtonText">lean more</p>
                <div className="arrow">
                  <svg
                    width="25"
                    height="6"
                    viewBox="0 0 25 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5L24 3.03571L22.0357 1"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 3H13"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 3H9"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 3H2"
                      stroke="#00A031"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
