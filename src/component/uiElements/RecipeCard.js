import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    const { label, source, image , dietLabels, healthLabels} = this.props.recipe;
    const styling = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
    };
    return (
      <div className="d-inline-block w-100 mb-3 text-center text-light">
        <div style={styling} className="rounded-lg p-0">
          <div className="bg-trans rounded-lg m-0 p-3">
            <div className="h5 sty-font mt-3">{label}</div>
            <div className="small">{source}</div>
            <div className="mt-3 text-left">
                {
                    dietLabels.map((label,i)=>(<span className="badge badge-danger mr-2" key={i}>{label}</span>))
                }
            </div>

            <div className="text-left">
                {
                    healthLabels.map((label,i)=>(<span className="badge badge-success mr-2" key={i}>{label}</span>))
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
