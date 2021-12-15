import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {
} from '../index';


const NavbarComponent = props => {
  const history = useHistory()
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light px-4 py-3">
      <a className="navbar-brand mr-4" href="#">
        <img src={Images.logo} width="auto" height="40" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${true ? '' : 'active'}`}>
            <a className="nav-link font-weight-bolder" href="#">Favorites</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
