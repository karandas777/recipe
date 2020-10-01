import React, { Component } from "react";

export default class Jumbo extends Component {

  render() {
    return (
      <div className="pt-5 pb-3">
        <div className="container">
          <h1 className="logo-txt sty-font text-center">
            <span className="text-danger">Recipe</span> Master
          </h1>
          <div className="logo-sub text-muted text-center mb-4">
            Find your favourite recipes & know more about them !
          </div>
        </div>
      </div>
    );
  }
}
