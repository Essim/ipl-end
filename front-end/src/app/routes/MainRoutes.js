// @flow weak

import React, {
  Component
}                       from 'react';
import {
  Route,
  Switch
 }                      from 'react-router';

import PropTypes        from 'prop-types';

import Home             from '../views/home';
import AdminDashboard   from '../views/adminDashboard';
import PrivateRoute     from '../components/privateRoute/PrivateRoute';
import PageNotFound     from '../views/pageNotFound';
import ReportForm       from '../views/reportForm';
import Login            from '../views/login';
import LogoutRoute      from '../components/logoutRoute/LogoutRoute';

class MainRoutes extends Component {
  static propTypes = {
    disconnectUser: PropTypes.func.isRequired,
    checkUserIsConnected: PropTypes.func.isRequired
  };

  render() {
    const { disconnectUser, checkUserIsConnected } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/report/:machineName" component={ReportForm} />
        <PrivateRoute checkUserIsConnected={checkUserIsConnected} path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/login" component={Login} />
        <LogoutRoute path="/logout" disconnectUser={disconnectUser} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default MainRoutes;
