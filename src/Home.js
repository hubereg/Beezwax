import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/" id="link-to-home">Home</Link>
      </li>
      <li>
        <Link to="/login" id="link-to-login">Login</Link>
      </li>
      <li>
        <Link to="/register" id="link-to-register">Register</Link>
      </li>
      <li>
        <Link to="/password" id="link-to-forgot-password">Forgot Password</Link>
      </li>
    </ul>
  </div>
);

export default Home;
