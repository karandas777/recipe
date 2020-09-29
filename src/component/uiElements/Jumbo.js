import React, { Component } from "react";

export default class Jumbo extends Component {
  render() {
    return (
      <div className="py-5 my-5">
        <div className="container">
          <h1 className="h1 sty-font mt-3">
            <img src={require('../../assets/icon.png')} className="mb-3" alt="logo" height="60" width="60"/>
            The <span className="text-danger">Recipe Book</span></h1>
          <p className="lead sty-font text-muted">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    );
  }
}
