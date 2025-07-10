// src/components/Footer.tsx
import React from 'react';

const accountLinks = ['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'];

const quickLinks = ['Privacy Policy', 'Terms of Use', 'FAQ', 'Contact'];

const socialLinks = [
  { href: 'https://www.facebook.com/', icon: 'facebook' },
  { href: 'https://x.com/?lang=en', icon: 'twitter' },
  { href: 'http://instagram.com', icon: 'instagram' },
  { href: 'https://in.linkedin.com', icon: 'linkedin' },
];

const storeButtons = [
  { icon: 'google-play', label: 'Google Play' },
  { icon: 'apple', label: 'App Store' },
];

const Footer: React.FC = () => (
  <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container">
      <div className="row">
        {/* Column 1: Newsletter */}
        <div className="col-md-2 mb-4">
          <h5 className="fw-bold">Exclusive</h5>
          <p>Subscribe & get 10% off your first order</p>
          <div className="input-group">
            <input
              type="email"
              className="form-control bg-secondary border-0 text-white"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button
              className="btn btn-secondary d-flex align-items-center justify-content-center"
              type="button"
            >
              <i className="bi bi-arrow-right text-white"></i>
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="col-md-3 mb-4">
          <h6 className="fw-semibold">Support</h6>
          <address className="mb-2">
            111 Bijoy Sarani,
            <br />
            Dhaka DH 1515
            <br />
            Bangladesh
          </address>
          <p className="mb-1">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Column 3: Account Links */}
        <div className="col-md-2 mb-4">
          <h6 className="fw-semibold">Account</h6>
          <ul className="list-unstyled">
            {accountLinks.map(text => (
              <li key={text}>
                <a href="#" className="text-white text-decoration-none">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="col-md-2 mb-4">
          <h6 className="fw-semibold">Quick Links</h6>
          <ul className="list-unstyled">
            {quickLinks.map(text => (
              <li key={text}>
                <a href="#" className="text-white text-decoration-none">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Download App & Social */}
        <div className="col-md-3 mb-4">
          <h6 className="fw-semibold">Download App</h6>
          <p>Save $3 with App—new users only</p>
          <div className="mb-2 w-25">
            <img src="/qr-code.png" alt="QR Code" className="img-fluid mb-2" />
          </div>
          <div className="d-flex gap-2 mb-3">
            {storeButtons.map(({ icon, label }) => (
              <button key={icon} className="btn btn-outline-light">
                <i className={`bi bi-${icon}`} /> {label}
              </button>
            ))}
          </div>
          <div className="d-flex gap-3">
            {socialLinks.map(({ href, icon }) => (
              <a key={icon} href={href} className="text-white fs-4">
                <i className={`bi bi-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-light" />

      <p className="text-center mb-0">
        © {new Date().getFullYear()} Exclusive. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
