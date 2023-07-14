import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { logo } from '../assets/index';

const Navbar = () => {
  return (
    <Router>
      <div className="w-[1280px] border-b-[1px] h-[142px] bg-blue-500 flex flex-row">
        <div>
          <img className="w-[28px]" src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
