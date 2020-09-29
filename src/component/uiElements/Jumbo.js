import React, { Component } from "react";

export default class Jumbo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       query:""
    }
  }
  
  funHandleChange=(e)=>{
    this.setState({query:e.target.value});
  }

  funSubmit=(e)=>{
    e.preventDefault();
    this.props.funSetQuery(this.state.query);
  }

  render() {
    return (
      <div className="py-5 my-5">
        <div className="container">
          <h1 className="logo-txt sty-font mt-3 text-center">
            <img
              src={require("../../assets/icon.png")}
              className="mb-3 logo-img"
              alt="logo"
              height="80"
              width="80"
            />
            <span className="text-success">Recipe</span> Master
          </h1>
          <div className="logo-sub sty-font text-muted text-center mb-4">
            Find your favourite recipes & know more about them !
          </div>

          <div className="text-center">
            <form onSubmit={this.funSubmit}>
            <input type="text" className="form-control w-75 mx-auto border-dark mb-3" value={this.state.query} onChange={this.funHandleChange} />
            <button type="submit" className="btn btn-dark">Search</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
