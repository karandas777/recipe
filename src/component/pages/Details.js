import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="text-center py-5">
          <div className="spinner-border text-danger"></div>
        </div>
      );
    }

    const {
      label,
      source,
      image,
      dietLabels,
      healthLabels,
      cautions,
    } = this.props.details;
    console.log(this.props.details);

    return (
      <div className="min-height container py-5">
        <div className="display-4 text-center text-danger sty-font">
          {label}
        </div>
        <div className="radius p-2 shadow-sm cardbg">
          <img src={image} className="w-100 radius" alt={label} />
          <div className="m-0 p-1">
            <div className="card-head sty-font mt-2">{label}</div>
            <div className="badgex">{source}</div>
            <div className="mt-1 text-left text-light">
              {dietLabels && dietLabels.map((label, i) => (
                <span className="badgex bg-danger px-1 rounded mr-2" key={i}>
                  {label}
                </span>
              ))}
              {healthLabels && healthLabels.map((label, i) => (
                <span className="badgex bg-danger px-1 rounded mr-2" key={i}>
                  {label}
                </span>
              ))}
              {cautions && cautions.map((label, i) => (
                <span className="badgex bg-danger px-1 rounded mr-2" key={i}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  details: state.recipe.recipeDetails,
  loading: state.load.loading,
});

export default connect(mapStateToProps)(Details);
