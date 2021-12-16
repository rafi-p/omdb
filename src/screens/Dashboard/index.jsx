import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CustomBtn,
  CustomFilter
} from '../../components/index'
import './style.scss';
import {
  Images,
  tempData
} from '../../constant/index'
import { convert } from '../../helpers/index';
import * as omdbActions from '../../store/omdb/actions';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [err, setErr] = useState('')

  const dataSearch = useSelector(state => state.omdb.data);
  const loadingList = useSelector(state => state.omdb.loadingList);
  const getDataSearch = dispatch(omdbActions.getDataSearch);
  const dataByCode = useSelector(state => state.omdb.dataByCode);
  const loadingCode = useSelector(state => state.omdb.loadingCode);
  const getDataByCode = dispatch(omdbActions.getDataByCode);

  const handleSubmit = (e) => {
    e.preventDefault()
    setErr('')
    getDataSearch({search})
    .then(res => {

    })
    .catch(err => {
      console.log({err})
      setErr(err)
    })
  }

  const handleFetchCode = (code) => {
    setErr('')
    getDataByCode({code})
  }

  return (
    <div
      className='d-flex flex-column align-items-center px-5'
      id='dashboard'
    >
      <div
        className={`my-5 ${isMobile ? 'w-100' : 'w-50'}`}
      >
        <form className="form-inline my-2 my-lg-0  w-100">
          <input
            className="form-control mr-sm-2 flex-grow-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
      {
        dataSearch && dataSearch.Search && dataSearch.Search.length > 0 && !err && !loadingList &&
        <div
          className={`${isMobile ? 'w-100' : 'w-50'} overflow-auto table-wrapper-scroll-y my-custom-scrollbar`}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='font-weight-bold'>Title</th>
                <th scope="col" className='font-weight-bold'>Year</th>
                <th scope="col" className='font-weight-bold'>imDB ID</th>
                <th scope="col" className='font-weight-bold'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                dataSearch.Search.map((el, i) => {
                  return (
                    <tr key={i}>
                      <th
                        scope="row"
                      >
                        <span
                          role="button"
                          data-toggle="modal"
                          data-target="#modalDetail"
                          onClick={() => handleFetchCode( el.imdbID)}
                        >
                          {el.Title}
                        </span>
                      </th>
                      <td>{el.Year}</td>
                      <td>{el.imdbID}</td>
                      <td><i className={`bi bi-star${false ? '-fill' : ''}`} role="button"></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
      {
        loadingList && !err &&
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      <div>
        {err}
      </div>

        <div className="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          {
            dataByCode && Object.keys(dataByCode).length !== 0 && !loadingCode &&
            <div className="modal-content">
              <div className="modal-header align-items-center">
                <h5 className="modal-title font-weight-bold text-uppercase mr-3" id="exampleModalLabel">{dataByCode.Title}</h5>
                <div
                  className='d-flex align-items-center bg-warning py-1 px-2 rounded text-secondary'
                >
                  <i className={`bi bi-star-fill mr-1`}></i>
                  <span
                  >
                    {dataByCode.imdbRating}
                  </span>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className={`modal-body ${!isMobile ? 'd-flex' : 'align-items-center d-flex flex-column'}`}>
                <div
                  className={`mr-3  ${!isMobile ? '' : 'w-75'}`}
                >
                  <img
                    src={dataByCode.Poster} alt=""
                    className={`rounded ${isMobile ? 'w-100' : ''}`}
                  />
                </div>
                <div
                  className={`${isMobile ? 'px-4 mt-3' : ''}`}
                >
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Year
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Year}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Released
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Released}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Runtime
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Runtime}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Genre
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Genre}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Director
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Director}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className={`font-weight-bold col-sm-3 ${isMobile ? 'mb-1' : ''}`}
                    >
                      Actors
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Actors}
                    </div>
                  </div>
                  <div
                    className={`mb-2 ${!isMobile ? 'row' : ''} customMobileRow`}
                  >
                    <div
                      className='mb-1 font-weight-bold col-sm-3'
                    >
                      Description
                    </div>
                    <div className='col-sm'>
                      {!isMobile && ': ' }{dataByCode.Plot}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
            {
              loadingCode && !err &&
              <div className="spinner-border text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
