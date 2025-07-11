import React from 'react';
import Layout from '../layouts/Layout';
import Button from '../components/common/Button';
import { Link } from 'gatsby';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      
      <div className="pt-3" />
      
      <nav aria-label="breadcrumb" className="mb-5 mt-3">
        <ol className="breadcrumb bg-white px-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active fw-bold " aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
      
      <div className="mb-5 mt-3" />
      <div className="row g-4 mb-5">
        {/* Contact Info Card */}
        <div className="col-12 col-md-4">
          <div className="card shadow-lg " style={{ height: '400px' }}>
            <div className="card-body">
              <div className="d-flex align-items-center mt-1 mb-3">
                <span className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40 }}>
                  <i className="bi bi-telephone fs-4"></i>
                </span>
                <div>
                  <h6 className="mb-2 fw-semibold">Call To Us</h6>
                </div>
              </div>
              <p className="mb-2">We are available 24/7, 7 days a week.</p>
              <p className="mb-4">Phone: +880611122222</p>
              <hr />
              <div className="d-flex align-items-center mb-3 mt-4">
                <span className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40 }}>
                  <i className="bi bi-envelope fs-4"></i>
                </span>
                <div>
                  <h6 className="mb-0 fw-semibold">Write To Us</h6>
                </div>
              </div>
              <p className="mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mb-2">Emails: customer@exclusive.com</p>
              <p className="mb-1">support@exclusive.com</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-12 col-md-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <form>
                <div className="row g-3 mb-4 mt-1">
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Your Name *" required />
                  </div>
                  <div className="col-md-4">
                    <input type="email" className="form-control" placeholder="Your Email *" required />
                  </div>
                  <div className="col-md-4">
                    <input type="tel" className="form-control" placeholder="Your Phone *" required />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea className="form-control" rows={9} placeholder="Your Message" required></textarea>
                </div>
                <div className="text-end">
                  <Button text="Send Message" width="180px" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Extra space before footer */}
      <div className="pb-5" />
    </Layout>
  );
};

export default ContactPage; 