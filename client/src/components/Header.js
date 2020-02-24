import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (<li><a href="/auth/google">Login With Google</a></li>);
      default:
        return [
          <li key={1}><a href="/api/logout">Logout</a></li>,
          <li key={2}><Payments /></li>
        ];
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">
              Survely
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header);