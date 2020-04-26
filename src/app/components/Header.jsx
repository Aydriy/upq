import React from "react";
import Mask from "../../image/header/mask.png";
import LoopModeInfinityLoop from "./Swiper.jsx";
import s from "../../sass/blocks/_navbar.module.sass";
import { NavLink } from "react-router-dom";
import Burger from "./Burger.jsx";
import { Link } from "react-scroll";

class Header extends React.Component {
  state = {
    show: true,
  };

  render() {
    return (
      <div>
        <header className="header " id="home">
          <div className="maskdiv">
            <img src={Mask} alt="logo" className="mask" />
          </div>

          <nav className="nav ">
            <div className="containerNav container">
              <div className={this.state.show ? "logo" : "logo logo-active"}>
                <svg
                  className="logo_svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7567 0C7.05451 0 0 7.05462 0 15.7569C0 24.4593 7.05451 31.5139 15.7567 31.5139H18.908C19.7773 31.5114 20.4812 30.8072 20.4834 29.9379V27.5522H15.7562C13.514 27.5548 11.3177 26.9172 9.42547 25.7144C9.18788 25.5634 9.0489 25.2971 9.06087 25.0158C9.07284 24.7346 9.23396 24.4811 9.48352 24.3508C9.73308 24.2206 10.0332 24.2333 10.2708 24.3843C11.9104 25.4265 13.8134 25.9788 15.7562 25.9763H20.4834V23.6342C20.4807 22.7653 19.7769 22.0617 18.908 22.0592H15.7567C12.2758 22.0592 9.45401 19.2374 9.45401 15.7564C9.45401 12.2755 12.2758 9.45366 15.7567 9.45366C19.2376 9.45366 22.0594 12.2755 22.0594 15.7564V29.9374C22.0616 30.8069 22.7658 31.5112 23.6353 31.5134H29.9365C30.8062 31.5109 31.5109 30.8067 31.5139 29.9369V15.7574C31.5139 7.05485 24.4591 0 15.7567 0ZM22.3128 6.8306C22.0857 7.18787 21.612 7.29346 21.2546 7.06646C17.1966 4.49485 11.8978 5.08162 8.50068 8.47878C5.10357 11.8759 4.51681 17.1748 7.08838 21.2329C7.24204 21.464 7.25873 21.7601 7.13203 22.007C7.00532 22.2539 6.75503 22.413 6.4777 22.4229C6.20038 22.4328 5.93938 22.2919 5.7954 22.0547C2.83843 17.3909 3.51217 11.2999 7.41694 7.39503C11.3217 3.4902 17.4126 2.81644 22.0764 5.77346C22.4331 6.00052 22.5386 6.47346 22.3123 6.8306H22.3128ZM26.7864 27.553C27.2216 27.553 27.5743 27.2002 27.5743 26.765V15.7339C27.5769 13.4917 26.9393 11.2954 25.7365 9.40309C25.5855 9.16549 25.3192 9.02651 25.038 9.03848C24.7567 9.05045 24.5032 9.21157 24.373 9.46114C24.2427 9.7107 24.2555 10.0108 24.4065 10.2484C25.4487 11.888 26.001 13.7911 25.9984 15.7339V26.765C25.9984 27.2002 26.3512 27.553 26.7864 27.553Z"
                    fill="white"
                  />
                </svg>
                <div className="UPQ">
                  <span className="">UPQODE</span>
                </div>
              </div>
              <div className="navItem">
                <ul className={s.navelement}>
                  <li className={s.navEl}>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={1000}
                    >
                      Home
                    </Link>
                  </li>
                  <li className={s.navEl}>
                    <Link
                      activeClass="active"
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={1000}
                    >
                      Services
                    </Link>
                  </li>
                  <li className={s.navEl}>
                    <Link
                      activeClass="active"
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={1000}
                    >
                      Team
                    </Link>
                  </li>
                  <li className={s.navEl}>
                    <Link
                      activeClass="active"
                      to="contactus"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={1000}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-burger-wrapper">
              <div
                className="burgerButton"
                onClick={() => this.setState({ show: !this.state.show })}
              >
                <Burger className="test" />
              </div>
              <div
                id="burger-nav"
                className={
                  this.state.show
                    ? "burger-nav"
                    : "burger-nav burger-nav-active"
                }
              >
                <div className="burger-nav__title">
                  <p className="burger-nav__title-p">NAVIGATION</p>
                </div>

                <div className="burger-nav__navElems">
                  <ul className={s.navelement}>
                    <li className={s.navEl}>
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={s.navEl}>
                      <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                      >
                        Services
                      </Link>
                    </li>
                    <li className={s.navEl}>
                      <Link
                        activeClass="active"
                        to="team"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                      >
                        Team
                      </Link>
                    </li>
                    <li className={s.navEl}>
                      <Link
                        activeClass="active"
                        to="contactus"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <section className="swiperSection">
            <LoopModeInfinityLoop />
          </section>
        </header>
      </div>
    );
  }
}

export default Header;
