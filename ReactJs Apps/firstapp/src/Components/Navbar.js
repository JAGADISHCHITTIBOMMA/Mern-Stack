import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AboutUs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">COntactUS</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;