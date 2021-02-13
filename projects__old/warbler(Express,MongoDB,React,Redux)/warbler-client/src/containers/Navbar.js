import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (

<div id="nav" className="nav">
		<div className="icon">
      {this.props.currentUser.isAuthenticated ? (
			<ul>
				<li><a href="#"><i className="fa fa-home "></i></a></li>
				<li><a href="#"><i className="fas fa-envelope"></i></a></li>
				<li><a href="#"><i className="fas fa-sign-out-alt"></i></a></li>
      </ul>
        ) : (
      <ul>
				<li><a href="#"><i className="fas fa-home"></i></a></li>
				<li><a href="#"><i className="fas fa-user-plus"></i></a></li>
				<li><a href="#"><i className="fas fa-sign-in-alt"></i></a></li>
      </ul>
      )}
		</div>
		<div className="text">
			<ul>
				<li>
          <Link to="/" className="home">
          Home
          </Link>
        </li>
      </ul>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
              New Message
              </Link>
            </li>
            <li>
              <Link onClick={this.logout}>
              Log out
              </Link>
            </li>
          </ul>
          ) : (
          <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
          <Link to="/signin">Log in</Link>
          </li>
      </ul>
      )}
		</div>
		<div className="info">
			<div className="logo"><i class="fas fa-dove"></i></div>
		</div>
	</div>


    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
