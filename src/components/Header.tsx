// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface NavItem {
  name: string;
  to: string;
}

const navItems: NavItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Contact', to: '/contact' },
  { name: 'About', to: '/about' },
  { name: 'Sign Up', to: '/signup' },
];

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
  };

  const handleProfileClick = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          Exclusive
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse ml-150px" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-25px">
            {navItems
              .filter(item => !(isLoggedIn && item.name === 'Sign Up')) //isLoggedIn is true then sign up is not shown
              .map(item => (
                <li key={item.to} className="nav-item">
                  <Link className="nav-link" to={item.to}>
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary ms-1" type="submit">
              <i className="bi bi-search" />
            </button>
          </form>

          <div className="d-flex align-items-center position-relative">
            {isLoggedIn && (
              <>
                <Link to="/wishlist" className="me-3 text-dark fs-5">
                  <i className="bi bi-heart" />
                </Link>
                <Link to="/cart" className="text-dark fs-5">
                  <i className="bi bi-cart" />
                </Link>
              </>
            )}
            {/* Profile icon and dropdown */}
            {isLoggedIn && (
              <div className="ms-3 position-relative">
                <button
                  className="btn btn-link p-0 border-0 text-dark fs-5"
                  style={{ outline: 'none', boxShadow: 'none' }}
                  onClick={handleProfileClick}
                  aria-label="Profile"
                >
                  <i className="bi bi-person-circle" />
                </button>
                {showDropdown && (
                  <div
                    className="position-absolute end-0 mt-2 py-2 px-3 rounded shadow"
                    style={{
                      background: 'linear-gradient(135deg, #666 60%, #999 90%)',
                      minWidth: 220,
                      zIndex: 1000,
                      opacity: 0.95,
                    }}
                  >
                    <Link
                      to="/account"
                      className="dropdown-item text-white d-flex align-items-center gap-2 py-2"
                      style={{ background: 'none' }}
                    >
                      <i className="bi bi-person" /> Manage My Account
                    </Link>
                    <Link
                      to="/orders"
                      className="dropdown-item text-white d-flex align-items-center gap-2 py-2"
                      style={{ background: 'none' }}
                    >
                      <i className="bi bi-bag" /> My Order
                    </Link>
                    <Link
                      to="/cancellations"
                      className="dropdown-item text-white d-flex align-items-center gap-2 py-2"
                      style={{ background: 'none' }}
                    >
                      <i className="bi bi-x-circle" /> My Cancellations
                    </Link>
                    <Link
                      to="/reviews"
                      className="dropdown-item text-white d-flex align-items-center gap-2 py-2"
                      style={{ background: 'none' }}
                    >
                      <i className="bi bi-star" /> My Reviews
                    </Link>
                    <button
                      className="dropdown-item text-white d-flex align-items-center gap-2 py-2 w-100 border-0 bg-transparent"
                      onClick={handleLogout}
                      style={{ background: 'none' }}
                    >
                      <i className="bi bi-box-arrow-right" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
