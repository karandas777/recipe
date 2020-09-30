import React, { Component } from "react";

export default class Jumbo extends Component {

  render() {
    return (
      <div className="pt-5 pb-3">
        <div className="container">
          <h1 className="logo-txt sty-font text-center">
            <img
              src={require("../../assets/icon.png")}
              className="mb-3 logo-img"
              alt="logo"
              height="80"
              width="80"
            />
            <span className="text-danger">Recipe</span> Master
          </h1>
          <div className="logo-sub sty-font text-muted text-center mb-4">
            Find your favourite recipes & know more about them !
          </div>
        </div>
      </div>
    );
  }
}
