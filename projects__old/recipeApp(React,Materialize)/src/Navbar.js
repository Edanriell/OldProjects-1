import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }
  
  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  
  render() {
    return (
      <header>
        <nav>
        <div class="nav-wrapper blue-grey darken-4">
          <div class="container">
          <a href="/" class="brand-logo">recipeApp</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a onClick={this.props.onNewRecipe} class="waves-effect waves-light btn">Add New Recipe</a></li>
          </ul>
          </div>
        </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;