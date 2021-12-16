import actionTypes from './actionTypes';

const initialState = {
  data:[],
  loadingList: false,
  dataByCode: {},
  loadingCode: false
};

const setDataReq= (state) => {

  return {
    ...state,
    loadingList: true
  };
};

const setDataSearch = (state, payload) => {

  return {
    ...state,
    data: payload.data,
    loadingList: false
  };
};

const setDataCodeReq = (state) => {

  return {
    ...state,
    loadingCode: true
  };
};

const setDataCode = (state, payload) => {

  return {
    ...state,
    dataByCode: payload.data,
    loadingCode: false
  };
};

const prodlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_OMDB_REQUEST:
      return setDataReq(state);
    case actionTypes.GET_OMDB_SUCCESS:
      return setDataSearch(state, action.payload);
    case actionTypes.GET_OMDB_CODE_REQUEST:
      return setDataCodeReq(state);
    case actionTypes.GET_OMDB_CODE_SUCCESS:
      return setDataCode(state, action.payload);
    default:
      return state;
  }
};

export default prodlistReducer;
