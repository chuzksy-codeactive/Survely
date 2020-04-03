import React from 'react';
import { Link } from 'react-router-dom';

import '../../src/styles/Landing.css';
import { connect } from 'react-redux';

const Landing = (props) => {
  return (
    <div className="container main" style={{ marginTop: "50px" }}>
      <div className="landing">
        <div className="landing-left">
          <h3>Get answers with surveys</h3>
          <p>Be the person with great ideas. Surveys give you actionable insights and fresh perspectives</p>

          <div className="buttons">
            {props.auth && <Link to="/surveys/new" className="waves-effect waves-light btn-large">Get Started</Link>} &nbsp;
            {!props.auth && <a href="/auth/google" className="waves-effect waves-light btn-large">Sign up with Google</a>}
          </div>
        </div>
        <div className="landing-right"></div>
      </div>
    </div>

  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Landing);