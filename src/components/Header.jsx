import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/pv">Present Value (PV) Calculator</Link></li>
          <li><Link to="/fv">Future Value (FV) Calculator</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;