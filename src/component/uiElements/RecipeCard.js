import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    const {label, source, image , dietLabels, healthLabels, cautions,ingredients} = this.props.recipe;
    return (
      <div className="d-inline-block w-100 my-2">
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

            <div className="mt-2">
              <div className="small text-danger mb-2">Ingredients:</div>
                {
                    ingredients.map((item,i)=>(
                    <span key={i}>
                      {
                        item.image ? (
                          <img src={item.image} alt={item.text} height="60" width="60" className="rounded-pill mr-2 mb-2 shadow-sm" />
                        ) : null
                      }
                      </span>
                    ))
                }
            </div>

            <div className="mt-2">
              <div className="small text-danger">Steps:</div>
                {
                    ingredients.map((item,i)=>(
                    <div className="small" key={i}>
                      <i className="fa fa-caret-right text-danger mr-2"></i>
                      {item.text}
                      </div>
                    ))
                }
            </div>
           
          </div>
          <div className="text-center mt-2">
            <hr className="w-25 pt-1 rounded-pill bg-danger mb-0"/>
          </div>
        </div>
      </div>
    );
  }
}
