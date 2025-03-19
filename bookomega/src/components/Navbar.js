import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h3>BookomegA</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/browse-books">Browse Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell-book">Sell a Book</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/category/fiction">Fiction</Link></li>
                  <li><Link className="dropdown-item" to="/category/non-fiction">Non-Fiction</Link></li>
                  <li><Link className="dropdown-item" to="/category/education">Education</Link></li>
                  <li><Link className="dropdown-item" to="/category/children">Children's Books</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createuser">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
