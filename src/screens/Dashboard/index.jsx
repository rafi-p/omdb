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
import * as prodListActions from '../../store/productList/actions';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Dashboard = props => {
  const dispatch = useDispatch();

  return (
    <div
      className='d-flex flex-column align-items-center px-5'
      id='dashboard'
    >
      <div
        className={`my-5 ${isMobile ? 'w-100' : 'w-50'}`}
      >
        <form className="form-inline my-2 my-lg-0  w-100">
          <input className="form-control mr-sm-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      {
        true &&
        <div
          className={`${isMobile ? 'w-100' : 'w-50'} overflow-auto`}
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
              <tr>
                <th
                  scope="row"
                >
                  <span
                    role="button"
                    data-toggle="modal"
                    data-target="#modalDetail"
                  >
                    Spiderman
                  </span>
                </th>
                <td>1999</td>
                <td>Odsadas123123</td>
                <td><i className={`bi bi-star${true ? '-fill' : ''}`} role="button"></i></td>
              </tr>
            </tbody>
          </table>
        </div>

      }

      <div className="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h5 className="modal-title font-weight-bold text-uppercase mr-3" id="exampleModalLabel">{tempData.Title}</h5>
              <div
                className='d-flex align-items-center bg-warning py-1 px-2 rounded text-secondary'
              >
                <i className={`bi bi-star-fill mr-1`}></i>
                <span
                >
                  {tempData.imdbRating}
                </span>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={`modal-body ${!isMobile ? 'd-flex' : 'align-items-center d-flex flex-column'}`}>
              <div
                className={`mr-3  ${!isMobile ? 'w-100' : 'w-75'}`}
              >
                <img
                  src={tempData.Poster} alt=""
                  className="img-fluid rounded"
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
                    {!isMobile && ': ' }{tempData.Year}
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
                    {!isMobile && ': ' }{tempData.Released}
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
                    {!isMobile && ': ' }{tempData.Runtime}
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
                    {!isMobile && ': ' }{tempData.Genre}
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
                    {!isMobile && ': ' }{tempData.Director}
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
                    {!isMobile && ': ' }{tempData.Actors}
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
                    {!isMobile && ': ' }{tempData.Plot}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
