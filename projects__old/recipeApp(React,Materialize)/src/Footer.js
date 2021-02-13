import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
   
    render() {
      return (
        <footer class="page-footer blue-grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">recipeApp</h5>
                <p class="grey-text text-lighten-4">Create and save your own recipes.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Follow Us</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">VK</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 recipeApp
            </div>
          </div>
        </footer>
      );
    }
  }
  
  export default Footer;