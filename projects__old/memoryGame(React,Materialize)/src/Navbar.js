import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({onNewGame}) => (
  <header>
    <nav className="teal darken-4">
    <div className="container">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Memory Game</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a onClick={onNewGame}>New Game</a></li>
        </ul>
      </div>
    </div>
    </nav>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default Navbar;