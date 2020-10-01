import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    const {label, source, image , dietLabels, healthLabels, cautions,ingredients} = this.props.recipe;
    return (
      <div className="d-inline-block w-100 my-3">
        

          <div className="text-center mt-2">
            <img src={image} className="rounded-pill w-50 shadow-sm border" alt={label}/>
            <div className="card-head sty-font mt-2">{label}</div>
            <div className="card-head"><i className="fa fa-caret-down"></i></div>
          </div>

          <div className="radius p-2 shadow-sm cardbg">
          <div className="m-0 p-1">
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
              <div className="small mb-2">Steps:</div>
                {
                    ingredients.map((item,i)=>(
                    <div className="small" key={i}>
                      <i className="fa fa-caret-right text-danger mr-2"></i>
                      {item.text}
                      </div>
                    ))
                }
            </div>

            <div className="small text-right font-weight-bold">~ {source}</div>
           
          </div>
          <div className="text-center mt-2">
            <hr className="w-25 rounded-pill bg-dark mb-0"/>
          </div>
        </div>
      </div>
    );
  }
}
