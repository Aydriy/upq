import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import SliderPerson from "./components/SwiperPerson.jsx";

function Routes(props) {
  return (
    <div>
      <Header />
      <Main />
      <SliderPerson />
      <Maps mapCityArr={props.mapCityArr} />
      <Footer />
    </div>
  );
}

export default Routes;
