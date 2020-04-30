import React, { Component } from "react";
import pc1 from "../../image/swiperPerson/Person.png";
import pc2 from "../../image/swiperPerson/Person2.jpg";
import pc3 from "../../image/swiperPerson/Person3.jpg";
import pc4 from "../../image/swiperPerson/Person4.jpg";
import pc5 from "../../image/swiperPerson/Person5.jpg";
import PointLink from "./Points/PointLink.jsx";

let link1 = (
  <div className="linkPerson">
    <div className="facebook">
      <PointLink />
      <a href="#">Facebook</a>
    </div>
    <div className="linkedin">
      <PointLink />
      <a href="#">Linkedin</a>
    </div>
    <div className="twitter">
      <PointLink />
      <a href="#">twitter</a>
    </div>
  </div>
);
let link2 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);
let link3 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);
let link4 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);
let link5 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);
let link6 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);
let link7 = (
  <div className="linkPerson">
    <PointLink />
    <a href="#">Facebook</a>
    <PointLink />
    <a href="#">Linkedin</a>
    <PointLink />
    <a href="#">twitter</a>
  </div>
);

class SliderPerson extends React.Component {
  constructor() {
    super();

    this.state = {
      link: [link1, link2, link3, link4, link5, link6, link7],
      images: [pc1, pc2, pc3, pc4, pc5, pc1, pc2],
      textTitleSlider: [
        "Robert Diego",
        "Antonio Pettis",
        "Jerri Kurt",
        "Julia Harrington",
        "Brendon Treck",
        "Robert Diego",
        "Antonio Pettis",
      ],
      postTextTitle: [
        "Art Director",
        "Art Director",
        "Art Director",
        "Art Director",
        "Art Director",
        "Art Director",
        "Art Director",
      ],
      textSlider: [
        "Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        "We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through. Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. ",
        "Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. Have you ever had a problem with a burned light?  When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        "Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. Have you ever had a problem with a burned light?  We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        "Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
        " When we are feeling so low and deep in the pits, this is when we need light to see our way through. Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in.",
        "We just go to the store or our cupboard and pull one out and screw it in.  Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
      ],
      name: [
        "Robert Diego",
        "Antonio Pettis",
        "Jerri Kurt",
        "Julia Harrington",
        "Brendon Treck",
        "Robert Diego",
        "Antonio Pettis",
      ],
      currentImagesIndex: 0,
      canGoPrev: false,
      canGoNext: true,
    };
    this.nextSlide = this.nextSlide.bind(this);
  }

  nextSlide(e) {
    let newIndex = this.state.currentImagesIndex;
    if (e.currentTarget.dataset.direction === "next") {
      if (newIndex < this.state.images.length - 1) {
        newIndex = this.state.currentImagesIndex + 1;
        this.state.canGoPrev = true;
      }
      if (newIndex === this.state.images.length - 1) {
        this.state.canGoNext = false;
      }
    } else {
      if (newIndex > 0) {
        newIndex = this.state.currentImagesIndex - 1;
        this.state.canGoNext = true;
      }
      if (newIndex === 0) {
        this.state.canGoPrev = false;
      }
    }
    // бескінечний слайдер вправо
    // if (this.state.currentImagesIndex === 5) {
    //   newIndex = this.state.currentImagesIndex = 1;
    //   this.state.canGoNext = true;
    // }

    this.setState({ currentImagesIndex: newIndex });
  }

  render() {
    return (
      <div className="sliderConteiner" id="team">
        <div className="carusel-conteiner">
          <div className="container-textfoto">
            <div className="description-con">
              <div className="container-description">
                <div>
                  <div className="carusel-slider">
                    <h1 className="titleSlide">
                      {
                        this.state.textTitleSlider[
                          this.state.currentImagesIndex
                        ]
                      }
                    </h1>

                    <h2 className="postTitleSlide">
                      {this.state.postTextTitle[this.state.currentImagesIndex]}
                    </h2>
                    <div className="descriptionSize">
                      <p className="postDescription">
                        {this.state.textSlider[this.state.currentImagesIndex]}
                      </p>
                      {this.state.link[this.state.currentImagesIndex]}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="btn-conteiner">
                    <div className="btnSwiper">
                      <button
                        disabled={!this.state.canGoNext}
                        className="btnRight"
                        id="next"
                        data-direction="next"
                        onClick={this.nextSlide.bind(this)}
                      >
                        <div className="carusel-slider-button">
                          <img
                            src={
                              this.state.images[
                                this.state.currentImagesIndex + 1
                              ]
                            }
                            alt=""
                            className="slide-botton-iamge"
                          />
                        </div>
                        <div className="buttonArrowEndText">
                          <div className="nextEndArrow">
                            <p className="arrowText">NEXT</p>
                            <svg
                              width="28"
                              height="8"
                              viewBox="0 0 28 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 4.49123V3.50877H25.7357L22.4497 0.701754L23.2781 0L28 4L23.2781 8L22.4221 7.29825L25.7357 4.49123H0Z"
                                fill="#00A031"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="arrowName">
                              {
                                this.state.name[
                                  this.state.currentImagesIndex + 1
                                ]
                              }
                            </h3>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="btnSwiper btn12">
                      <button
                        disabled={!this.state.canGoPrev}
                        className="btnLeft"
                        id="prev"
                        data-direction="prev"
                        onClick={this.nextSlide.bind(this)}
                      >
                        <div className="buttonArrowEndText">
                          <div className="prevEndArrow">
                            <svg
                              width="28"
                              height="8"
                              viewBox="0 0 28 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M28 4.49123V3.50877H2.2643L5.5503 0.701754L4.72189 0L0 4L4.72189 8L5.57791 7.29825L2.2643 4.49123H28Z"
                                fill="#00A031"
                              />
                            </svg>
                            <p className="arrowText">PREV</p>
                          </div>
                          <div>
                            <h3 className="arrowName arrowNamePrev">
                              {
                                this.state.name[
                                  this.state.currentImagesIndex - 1
                                ]
                              }
                            </h3>
                          </div>
                        </div>

                        <div className="carusel-slider-button">
                          <img
                            src={
                              this.state.images[
                                this.state.currentImagesIndex - 1
                              ]
                            }
                            alt=""
                            className="slide-botton-iamge"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carusel-slider-stack">
              <div className="stack-slider-1">
                <img
                  src={this.state.images[this.state.currentImagesIndex]}
                  alt=""
                  className="slide"
                />
              </div>

              <div className="stack-slider-2">
                <img
                  src={this.state.images[this.state.currentImagesIndex + 1]}
                  alt=""
                  className="slide2"
                />
              </div>
              <div className="stack-slider-3">
                <img
                  src={this.state.images[this.state.currentImagesIndex + 2]}
                  alt=""
                  className="slide3"
                />
              </div>
            </div>
          </div>

          {/* {this.state.currentImagesIndex} */}
        </div>
      </div>
    );
  }
}

export default SliderPerson;
