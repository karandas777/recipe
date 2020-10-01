import {FIND_RECIPE} from '../action/types';

const initialState = {
    myrecipes:[],
}

const recipeReducer = (state = initialState,action)=>{
    switch(action.type){
        case FIND_RECIPE :
            return{
                ...state,
                myrecipes:action.payload,
            }
        default :
            return state
    }
}

export default recipeReducer;
