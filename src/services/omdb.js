import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getDataSearch = async(params, data) => {
  const setDataSearch = cats => {
    // let newArr = cats.map((cat, i) => {
    //   return {
    //     area_kota: cat.area_kota,
    //     area_provinsi: cat.area_provinsi,
    //     komoditas: cat.komoditas,
    //     price: cat.price ? Number(cat.price.replace(/[.]+/g,"")) : cat.price,
    //     size: cat.size ? Number(cat.size.replace(/[.]+/g,"")) : cat.size,
    //     tgl_parsed: cat.tgl_parsed ,
    //     timestamp: cat.timestamp,
    //     uuid: cat.uuid,
    //   };
    // });
    // return newArr;
    return cats
  };

  try {

    const uri = params
    ?`&t=${params.search ? params.search : ''}`
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