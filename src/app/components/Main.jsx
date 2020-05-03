import React from "react";
import telephone from "../../image/main/telephone.png";
import arrowCheck from "../../image/main/check/arrowCheck.png";
import circleCheck from "../../image/main/check/circleCheck.png";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { TimelineMax, TimelineLite, gsap } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

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
    const LineMain = (props) => {
      return (
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
      );
    };
    const PointMain = (props) => {
      return (
        <svg
          className="pulse"
          width="167"
          height="167"
          viewBox="0 0 167 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84 90C87.3137 90 90 87.3137 90 84C90 80.6863 87.3137 78 84 78C80.6863 78 78 80.6863 78 84C78 87.3137 80.6863 90 84 90Z"
            fill="#29A0EC"
          />
          <path
            opacity="0.3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 96C90.4036 96 96 90.4036 96 83.5C96 76.5964 90.4036 71 83.5 71C76.5964 71 71 76.5964 71 83.5C71 90.4036 76.5964 96 83.5 96Z"
            fill="#29A0EC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 101C93.165 101 101 93.165 101 83.5C101 73.835 93.165 66 83.5 66C73.835 66 66 73.835 66 83.5C66 93.165 73.835 101 83.5 101Z"
            stroke="#00A031"
            strokeOpacity="0.16"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 106C95.9264 106 106 95.9264 106 83.5C106 71.0736 95.9264 61 83.5 61C71.0736 61 61 71.0736 61 83.5C61 95.9264 71.0736 106 83.5 106Z"
            stroke="#00A031"
            strokeOpacity="0.13"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 111C98.6878 111 111 98.6878 111 83.5C111 68.3122 98.6878 56 83.5 56C68.3122 56 56 68.3122 56 83.5C56 98.6878 68.3122 111 83.5 111Z"
            stroke="#00A031"
            strokeOpacity="0.12"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 117C102.002 117 117 102.002 117 83.5C117 64.9985 102.002 50 83.5 50C64.9985 50 50 64.9985 50 83.5C50 102.002 64.9985 117 83.5 117Z"
            stroke="#00A031"
            strokeOpacity="0.11"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 123C105.315 123 123 105.315 123 83.5C123 61.6848 105.315 44 83.5 44C61.6848 44 44 61.6848 44 83.5C44 105.315 61.6848 123 83.5 123Z"
            stroke="#00A031"
            strokeOpacity="0.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84 131C109.957 131 131 109.957 131 84C131 58.0426 109.957 37 84 37C58.0426 37 37 58.0426 37 84C37 109.957 58.0426 131 84 131Z"
            stroke="#00A031"
            strokeOpacity="0.08"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 139C114.152 139 139 114.152 139 83.5C139 52.8482 114.152 28 83.5 28C52.8482 28 28 52.8482 28 83.5C28 114.152 52.8482 139 83.5 139Z"
            stroke="#00A031"
            strokeOpacity="0.06"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 147C118.57 147 147 118.57 147 83.5C147 48.4299 118.57 20 83.5 20C48.4299 20 20 48.4299 20 83.5C20 118.57 48.4299 147 83.5 147Z"
            stroke="#00A031"
            strokeOpacity="0.04"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 156C123.541 156 156 123.541 156 83.5C156 43.4594 123.541 11 83.5 11C43.4594 11 11 43.4594 11 83.5C11 123.541 43.4594 156 83.5 156Z"
            stroke="#00A031"
            strokeOpacity="0.03"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5 166C129.063 166 166 129.063 166 83.5C166 37.9365 129.063 1 83.5 1C37.9365 1 1 37.9365 1 83.5C1 129.063 37.9365 166 83.5 166Z"
            stroke="#00A031"
            strokeOpacity="0.03"
          />
        </svg>
      );
    };
    const Arrow = (props) => {
      return (
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
      );
    };
    const CircleInnerImage = (props) => {
      return (
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
      );
    };

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
            <LineMain />
          </div>

          <div className="track">
            <div className="box circleOutBox">
              <div className="circleInner">
                <div className="circleInnerBackground"></div>
              </div>
              <CircleInnerImage />
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
                <Arrow />
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
                <Arrow />
              </button>
            </div>
            <div className="box circleOutBox">
              <div className="circleInner">
                <div className="circleInnerBackground"></div>
              </div>
              <CircleInnerImage />
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
              <CircleInnerImage />
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
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
