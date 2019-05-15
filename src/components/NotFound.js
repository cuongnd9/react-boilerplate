import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center">
      <p className="text-danger h1 my-5">404</p>
      <Link className="text-center btn btn-outline-primary" to="/">
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
