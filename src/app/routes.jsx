import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import SliderPerson from "./components/SwiperPerson.jsx";

function Routes() {
  return (
    <Router>
      <Header />
      <Main />
      {/* <App/> */}
      <SliderPerson />
      <Maps />
      <Footer />
    </Router>
  );
}

export default Routes;
