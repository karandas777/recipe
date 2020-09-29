import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-success py-2 shadow-sm">
        <div className="container px-custom text-center">
          <div className="h6 my-3 text-light sty-font">Recipe Master</div>
          <div id="edamam-badge" data-color="white" className="mb-3"></div>
        </div>
      </div>
    );
  }
}
