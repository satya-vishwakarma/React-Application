import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';

const checkAuth = () => {
  const token = localStorage.getItem('_token');

  if (!token) {
    return false;
  }
  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      localStorage.clear();
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (checkAuth() ? (
        <>

          <div className="wrapper">

            <Component {...props} />
          </div>

        </>
      ) : (

        <Redirect
          to={{
            pathname: '/login',

          }}
        />

      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
};
export default PrivateRoute;
