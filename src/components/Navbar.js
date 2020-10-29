import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-center">
        <Link to="/">
          <img src={logo} alt="Meology logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
