import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  funHandleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  funSubmit = (e) => {
    e.preventDefault();
    if(this.state.query === ""){
        return false;
    }
    else{
        this.props.funSetQuery(this.state.query);
    }
  };

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.funSubmit}>
          <input
            type="text"
            className="form-control border-0 mx-auto shadow-sm bg-form mb-3"
            value={this.state.query}
            onChange={this.funHandleChange}
            placeholder="Search for your favourite recipes"
          />
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
      </div>
    );
  }
}
