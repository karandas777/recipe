import React, { Component } from "react";
import {connect} from 'react-redux'; 
import {findRecipe} from '../../redux/action/recipeAction';
import RecipeCard from "../uiElements/RecipeCard";
import Jumbo from '../uiElements/Jumbo';
import SearchForm from "../uiElements/SearchForm";

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       query:"pasta",
       loading:true,
    }
  }
  
  componentDidMount(){
    window.scrollTo(0,0);
    this.props.findRecipe(this.state.query);
  }

  funSetQuery = (data) => {
      this.setState({query:data},()=>{
        this.props.findRecipe(this.state.query);
      });
  }

  render() {
    return (
      <div className="container-fluid py-2 px-0">
        <div className="container px-custom min-height">

          <Jumbo/>

          <SearchForm funSetQuery={this.funSetQuery}/>

          <div className="text-center mt-5 mb-3">
          {
              this.props.loading ? (<div className="spinner-border text-danger"></div>) : 
              (<div className="text-muted">{`Some popular ${this.state.query} recipes.`}</div>)
          }
          </div>

          <div className="holder m-0 pt-3 pb-5 px-0">
            {
              !this.props.loading && this.props.myrecipes.map((item,i)=>(
                <RecipeCard key={i} recipe={item.recipe}/>
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
  loading:state.load.loading,
})

export default connect(mapStateToProps,{findRecipe})(Home);