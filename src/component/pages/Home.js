import React, { Component } from "react";
import {connect} from 'react-redux'; 
import {findRecipe} from '../../redux/action/recipeAction';
import RecipeCard from "../uiElements/RecipeCard";
import Jumbo from '../uiElements/Jumbo';

class Home extends Component {

  componentDidMount(){
    this.props.findRecipe('chicken');
  }

  render() {
    console.log(this.props.myrecipes);
    return (
      <div className="container-fluid py-2 px-0">
        <div className="container px-custom min-height">

          <Jumbo/>

          {
              this.props.myrecipes.length === 0 ? (<div className="text-center">Loading</div>) : null
          }

          <div className="holder m-0 py-3 px-0">
            {
              this.props.myrecipes && this.props.myrecipes.map((item,i)=>(
                <RecipeCard key={i} recipe={item.recipe} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  myrecipes:state.recipe.myrecipes,
})

export default connect(mapStateToProps,{findRecipe})(Home);