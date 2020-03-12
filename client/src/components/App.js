import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import 'materialize-css/dist/css/materialize.min.css';

const SurveyNew = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Create a New Survey</h1>
    </div>
  )
}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyNew} />
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(null, actions)(App);
