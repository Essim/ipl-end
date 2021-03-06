// @flow weak

import React, {
  Component
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  Route,
  Redirect,
  withRouter
}                         from "react-router-dom";
import auth               from '../../services/auth';

class PrivateRoute extends Component {
  static propTypes = {
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    component:  PropTypes.any.isRequired,
    path:       PropTypes.string,

    checkUserIsConnected: PropTypes.func.isRequired
  };

  render() {
    const {
      component: InnerComponent,
      ...rest
    } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();

    return (
      <Route
        {...rest}
        render={
          props => (
            isUserAuthenticated
              ? <InnerComponent {...props} />
              : <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }

  isAuthenticated() {
    const checkUserHasId = user => user;
    const user            = auth.getUserInfo()
                            ? auth.getUserInfo()
                            : null;
    const isAuthenticated = !!(auth.getToken() && checkUserHasId(user));
    const { checkUserIsConnected } = this.props;
    checkUserIsConnected();
    return isAuthenticated;
  }
}

export default withRouter(PrivateRoute);
