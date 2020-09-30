import { START_LOAD, STOP_LOAD } from "../action/types";

const initialState = {
  loading: false,
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loadReducer;
