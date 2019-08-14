import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';

function Login({ location }) {
  const { from } = location.state || { from: { pathname: '/' } };
  const [isRedirect, setIsRedirect] = useState(false);
  return isRedirect ? (
    <Redirect to={from} />
  ) : (
    <form className="col-4 offset-4 mt-5">
      <p className="h3 text-success my-4">Login</p>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" />
      </div>
      <div className="form-group form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setIsRedirect(true);
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
