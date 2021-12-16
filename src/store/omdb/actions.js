/* eslint-disable no-undef */
import * as omdbServices from '../../services/omdb';

import actionTypes from './actionTypes';

export const getDataSearchRequest = () => ({
  type: actionTypes.GET_OMDB_REQUEST,
});

export const getDataSearchSuccess = payload => ({
  type: actionTypes.GET_OMDB_SUCCESS,
  payload: { ...payload },
});

export const getDataByCodeRequest = () => ({
  type: actionTypes.GET_OMDB_CODE_REQUEST,
});


export const getDataByCodeSuccess = payload => ({
  type: actionTypes.GET_OMDB_CODE_SUCCESS,
  payload: { ...payload },
});

export const getDataSearch = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getDataSearchRequest());
    const apiFetch = await omdbServices.getDataSearch(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200 && data?.Response !== 'False') {
      resolve(dispatch(getDataSearchSuccess({ data: data })));
    } else {
      reject(data?.Error);
    }
  });
};

export const getDataByCode = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getDataByCodeRequest());
    const apiFetch = await omdbServices.getDataByCode(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200 && data?.Response !== 'False') {
      resolve(dispatch(getDataByCodeSuccess({ data: data })));
    } else {
      reject(data?.Error);
    }
  });
};