import React, { Component } from 'react'

class Header extends Component {
  state = {}
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="" className="left brand-logo">
              Emaily
          </a>
            <ul className="right">
              <li>
                <a href="">Login With Google</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;