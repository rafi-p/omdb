import actionTypes from './actionTypes';

const initialState = {
  data: {},
};

const setDataSearch = (state, payload) => {

  return {
    ...state,
    data: payload.data,
  };
};

const prodlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_OMDB_SUCCESS:
      return setDataSearch(state, action.payload);
    default:
      return state;
  }
};

export default prodlistReducer;
