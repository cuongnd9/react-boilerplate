import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from 'common/router';
import { Navbar } from 'components';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Navbar />
      <RouterConfig />
    </Router>
  );
}

export default App;
