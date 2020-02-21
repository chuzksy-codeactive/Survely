import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header';

import 'materialize-css/dist/css/materialize.min.css';


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    </div>
  )
}

export default App;