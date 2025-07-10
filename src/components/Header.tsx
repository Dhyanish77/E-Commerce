// src/components/Header.tsx
import React from "react"
import { Link } from "gatsby"
import "bootstrap-icons/font/bootstrap-icons.css"

interface NavItem {
  name: string
  to: string
}

const navItems: NavItem[] = [
  { name: "Home",     to: "/" },
  { name: "Contact",  to: "/contact" },
  { name: "About",    to: "/about" },
  { name: "Sign Up",  to: "/signup" },
]

const Header: React.FC = () => (
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
          {navItems.map((item) => (
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

        <div className="d-flex align-items-center">
          <Link to="/wishlist" className="me-3 text-dark fs-5">
            <i className="bi bi-heart" />
          </Link>
          <Link to="/cart" className="text-dark fs-5">
            <i className="bi bi-cart" />
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
