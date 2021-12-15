/* eslint-disable no-undef */
import * as omdbServices from '../../services/omdb';

import actionTypes from './actionTypes';

export const getDataSearchSuccess = payload => ({
  type: actionTypes.GET_OMDB_SUCCESS,
  payload: { ...payload },
});

export const getDataSearch = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await omdbServices.getDataSearch(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200 && data?.Response !== 'False') {
      resolve(dispatch(getDataSearchSuccess({ data: data })));
    } else {
      reject(data?.Error);
    }
  });
};