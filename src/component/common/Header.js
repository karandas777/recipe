import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid py-2">
        <div className="container px-custom">
          <div className="h5 mb-0 mt-1 sty-font">
            The <span className="text-danger">Recipe Book</span>
          </div>
        </div>
      </div>
    );
  }
}
