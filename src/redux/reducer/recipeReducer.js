import {FIND_RECIPE,RECIPE_DETAILS} from '../action/types';

const initialState = {
    myrecipes:[],
    recipeDetails:{},
}

const recipeReducer = (state = initialState,action)=>{
    switch(action.type){
        case FIND_RECIPE :
            return{
                ...state,
                myrecipes:action.payload,
            }
        case RECIPE_DETAILS :
            return{
                ...state,
                recipeDetails:action.payload,
            }
        default :
            return state
    }
}

export default recipeReducer;
