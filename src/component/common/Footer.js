import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark py-2 shadow-sm">
        <div className="container px-custom text-center">
          <div className="h6 my-3 text-light sty-font">The Recipe Book</div>
          <div id="edamam-badge" className="mb-3"></div>
        </div>
      </div>
    );
  }
}
