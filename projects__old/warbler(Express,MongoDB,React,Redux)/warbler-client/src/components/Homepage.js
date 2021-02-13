import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <div className="home-hero">
          <h1>What's Happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to="/signup" className="btn btn-lg btn-dark">
            Sign up here
          </Link>
        </div>
        <ul class="cb-slideshow">
          <li>
            <span>Image 01</span>
          </li>
          <li>
            <span>Image 02</span>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;
