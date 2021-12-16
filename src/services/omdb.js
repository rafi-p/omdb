import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getDataSearch = async(params, data) => {
  const setDataSearch = cats => {
    return cats
  };

  try {

    const uri = params
    ?`&s=${params.search ? params.search : ''}&page=${params.page ? params.page : ''}`
    : ''

    const response = await customFetch(`${Endpoints.url}${uri}`, 'GET', data, false);

    if (response.data) {
      response.data = setDataSearch(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};

export const getDataByCode = async(params, data) => {
  const setDataByCode = cats => {
    return cats
  };

  try {

    const uri = params
    ?`&i=${params.code ? params.code : ''}`
    : ''

    const response = await customFetch(`${Endpoints.url}${uri}`, 'GET', data, false);

    if (response.data) {
      response.data = setDataByCode(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};