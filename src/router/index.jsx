import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Dashboard,
  Favorites
} from '../screens';

let publicRoutes =  [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/favorite',
      component: Favorites,
    },
  ]

const Router = props => {

  return (
    // <ConnectedRouter history={ props.history }>
    <Switch>
      {
        publicRoutes.map(route =>
          <Route
            key={ route.path }
            exact path={ route.path }
            component={ route.component }
          />
        )
      }
      {/* <Redirect to={ '/' }/> */}
    </Switch>
    // </ConnectedRouter>
  );
};

export default Router;
