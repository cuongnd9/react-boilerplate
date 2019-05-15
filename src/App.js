import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReposContainer } from './containers';

function App() {
  return (
    <div className="container p-5">
      <p className="text-primary">React Boilerplate</p>
      <ReposContainer />
    </div>
  );
}

export default App;
