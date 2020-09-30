import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import loadReducer from './loadReducer';

export default combineReducers({
        recipe:recipeReducer,
        load:loadReducer,
})