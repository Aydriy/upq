import React, { Component } from "react";

class Burger extends React.Component {
  state = {
    show: true
  };

  render() {
    return (
      <div className="item-container">
        <section className="section-container">
          <div
            id="humburgerId"
            className={
              this.state.show ? "hamburger" : "hamburger activeHamburger"
            }
            onClick={() => this.setState({ show: !this.state.show })}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </section>
      </div>
    );
  }
}

export default Burger;
