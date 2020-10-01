import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    const {uri, label, source, image , dietLabels, healthLabels, cautions} = this.props.recipe;
    return (
      <div className="d-inline-block w-100 my-2">
        <button 
        className="p-0 btn btn-link text-decoration-none radius text-dark text-left w-100"
        onClick={()=>{this.props.getRecipeDetails(uri)}}
        >
        <div className="radius p-2 shadow-sm cardbg">
          <img src={image} className="w-100 radius" alt={label}/>
          <div className="m-0 p-1">
            <div className="card-head sty-font mt-2">{label}</div>
            <div className="badgex">{source}</div>
            <div className="mt-1 text-left text-light">
                {
                    dietLabels.map((label,i)=>(<span className="badgex bg-danger px-1 rounded mr-2" key={i}>{label}</span>))
                }
                {
                    healthLabels.map((label,i)=>(<span className="badgex bg-danger px-1 rounded mr-2" key={i}>{label}</span>))
                }
                {
                    cautions.map((label,i)=>(<span className="badgex bg-danger px-1 rounded mr-2" key={i}>{label}</span>))
                }
            </div>
          </div>
        </div>
        </button>
      </div>
    );
  }
}
