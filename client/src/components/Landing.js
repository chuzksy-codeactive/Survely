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
            {!props.auth && <><a href="/auth/google" className="waves-effect  red lighten-3 btn-large">Sign up with Google</a><span>OR</span> 
              <a href="/auth/facebook"><i  id="facebook" class="fa fa-facebook-square" aria-hidden="true"></i></a>
              <i class="fa fa-github-square" aria-hidden="true">
              </i> <i class="fa fa-twitter-square" aria-hidden="true"></i></>}
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