import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    const { label, source, image , dietLabels, healthLabels, cautions,ingredientLines} = this.props.recipe;
    const styling = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
    };
    return (
      <div className="d-inline-block w-100 mb-3 text-light">
        <div style={styling} className="radius p-0">
          <div className="bg-trans radius m-0 p-3">
            <div className="card-head sty-font mt-1">{label}</div>
            <div className="badgex">{source}</div>
            <div className="mt-3 text-left">
                {
                    dietLabels.map((label,i)=>(<span className="badgex bg-trans-light px-1 rounded mr-2" key={i}>{label}</span>))
                }
                {
                    healthLabels.map((label,i)=>(<span className="badgex bg-trans-light px-1 rounded mr-2" key={i}>{label}</span>))
                }
                {
                    cautions.map((label,i)=>(<span className="badgex bg-trans-light px-1 rounded mr-2" key={i}>{label}</span>))
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
