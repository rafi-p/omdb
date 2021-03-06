/* eslint-disable no-undef */
import * as omdbServices from '../../services/omdb';

import actionTypes from './actionTypes';

export const getDataSearchRequest = () => ({
  type: actionTypes.GET_OMDB_REQUEST,
});
export const getDataSearchFailed = () => ({
  type: actionTypes.GET_OMDB_FAILED,
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

export const saveToFavSuccess = payload => ({
  type: actionTypes.ADD_FAVE,
  payload: { ...payload },
});

export const removeToFavSuccess = payload => ({
  type: actionTypes.REMOVE_FAVE,
  payload: { ...payload },
});

export const removeDataSearchSuccess = () => ({
  type: actionTypes.REMOVE_OMDB,
});

export const getDataSearch = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    if(params && !params?.noLoading) {
      dispatch(getDataSearchRequest());
    }
    const apiFetch = await omdbServices.getDataSearch(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200 && data?.Response !== 'False') {
      resolve(dispatch(getDataSearchSuccess({ data: data })));
    } else {
      dispatch(getDataSearchFailed());
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

export const saveToFav = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    if (body) {
      resolve(dispatch(saveToFavSuccess({ data: body })));
    } else {
      reject('No data');
    }
  });
};

export const removeToFav = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    if (body) {
      resolve(dispatch(removeToFavSuccess({ data: body })));
    } else {
      reject('No data');
    }
  });
};

export const removeDataSearch = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    resolve(dispatch(removeDataSearchSuccess()))
  });
};