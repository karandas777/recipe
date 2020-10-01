import React, { Component } from "react";
import {connect} from 'react-redux'; 
import {findRecipe,recipeDetails} from '../../redux/action/recipeAction';
import RecipeCard from "../uiElements/RecipeCard";
import Jumbo from '../uiElements/Jumbo';
import SearchForm from "../uiElements/SearchForm";

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       query:"chicken",
       loading:true,
    }
  }
  
  componentDidMount(){
    this.props.findRecipe(this.state.query);
  }

  funSetQuery = (data) => {
      this.setState({query:data},()=>{
        this.props.findRecipe(this.state.query);
      });
  }

  getRecipeDetails=(id)=>{
        this.props.recipeDetails(id);
        this.props.history.push('/details');
  }

  render() {
    console.log(this.props.myrecipes);
    return (
      <div className="container-fluid py-2 px-0">
        <div className="container px-custom min-height">

          <Jumbo/>

          <SearchForm funSetQuery={this.funSetQuery}/>

          <div className="text-center my-4">
          {
              this.props.loading ? (<div className="spinner-border text-danger"></div>) : 
              (<div className="text-muted">{`Some popular ${this.state.query} recipes.`}</div>)
          }
          </div>

          <div className="holder m-0 py-3 px-0">
            {
              !this.props.loading && this.props.myrecipes.map((item,i)=>(
                <RecipeCard key={i} recipe={item.recipe} getRecipeDetails={this.getRecipeDetails} />
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

export default connect(mapStateToProps,{findRecipe,recipeDetails})(Home);