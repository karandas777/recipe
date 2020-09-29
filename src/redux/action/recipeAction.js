import Axios from 'axios';
import {APIURL, FIND_RECIPE} from './types';

export const findRecipe = (query) => dispatch => {
    Axios.get(APIURL,{
        params:{
            q:query,
            app_id:"2381de63",
            app_key:"4a9cc5a4fe8d6ae0a61a2b3857997b96",
            form:0,
            to:21,
        }
    })
    .then((res)=>{
        dispatch({
            type:FIND_RECIPE,
            payload:res.data.hits,
        })
    })
    .catch((err)=>{console.log(err)})
}