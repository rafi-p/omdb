import actionTypes from './actionTypes';
import {LocalStorage} from '../../helpers'

const initialState = {
  data:[],
  loadingList: false,
  dataByCode: {},
  loadingCode: false,
  dataFave: LocalStorage.getOMDB() ? LocalStorage.getOMDB() : [],
};

const setDataReq= (state) => {

  return {
    ...state,
    loadingList: true
  };
};

const setDataSearch = (state, payload) => {
  let temp = payload.data.Search
  if(
    state.dataFave && state.dataFave.length > 0 &&
    payload.data?.Search && payload.data?.Search.length > 0
  ) {
    temp = payload.data.Search.map((el, i) => {
      let status = false
      state.dataFave.forEach(el2 => {
        if(el.imdbID === el2.imdbID) {
          status = true
        }
      })
      return {...el, status}
    })
  }
  return {
    ...state,
    data: {...payload.data, Search: temp},
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

const setFave = (state, payload) => {

  return {
    ...state,
    dataFave: [...state.dataFave, payload.data],
  };
};

const setRemoveFave = (state, payload) => {
  let temp = state.dataFave
  temp = temp.filter((el, i) => el.imdbID !== payload.data.imdbID)
  return {
    ...state,
    dataFave: temp,
  };
};

const OMDBReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_OMDB_REQUEST:
      return setDataReq(state);
    case actionTypes.GET_OMDB_SUCCESS:
      return setDataSearch(state, action.payload);
    case actionTypes.GET_OMDB_CODE_REQUEST:
      return setDataCodeReq(state);
    case actionTypes.GET_OMDB_CODE_SUCCESS:
      return setDataCode(state, action.payload);
    case actionTypes.ADD_FAVE:
      return setFave(state, action.payload);
    case actionTypes.REMOVE_FAVE:
      return setRemoveFave(state, action.payload);
    default:
      return state;
  }
};

export default OMDBReducer;
