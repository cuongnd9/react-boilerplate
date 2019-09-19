import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from 'common/router';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  );
}

export default App;
