import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'gatsby';

const SIDEBAR_MENU = [
  {
    title: 'Manage My Account',
    items: [
      { label: 'My Profile', key: 'profile', active: true },
      { label: 'Address Book', key: 'address' },
      { label: 'My Payment Options', key: 'payment' },
    ],
  },
  {
    title: 'My Orders',
    items: [
      { label: 'My Returns', key: 'returns' },
      { label: 'My Cancellations', key: 'cancellations' },
    ],
  },
  {
    title: 'My Wishlist',
    items: [{ label: 'Wishlist', key: 'wishlist', link: '/wishlist' }],
  },
];

const AccountPage = () => {
  return (
    <Layout>
      <div className="min-vh-100">
        <div className="container py-4 mb-5">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-5 mt-3">
            <ol className="breadcrumb bg-white px-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active " aria-current="page">
                My Account
              </li>
            </ol>
          </nav>
          <div className="d-flex gap-5">
            {/* Sidebar */}
            <aside
              className="bg-white rounded-3 border shadow-sm p-4 flex-shrink-0"
              style={{ width: '260px' }}
            >
              {SIDEBAR_MENU.map(section => (
                <div key={section.title} className="mb-4">
                  <div className="text-uppercase small fw-bold text-secondary mb-2">
                    {section.title}
                  </div>
                  <ul className="list-unstyled mb-0">
                    {section.items.map(item => (
                      <li key={item.key} className="mb-1">
                        {item.link ? (
                          <a
                            href={item.link}
                            className={`text-decoration-none sidebar-link ps-2 ${item.active ? 'text-danger fw-bold' : 'text-secondary'} `}
                            style={{ fontSize: '0.8rem', transition: 'color 0.2s' }}
                            onMouseEnter={e => {
                              if (!item.active) e.currentTarget.classList.add('text-danger');
                            }}
                            onMouseLeave={e => {
                              if (!item.active) e.currentTarget.classList.remove('text-danger');
                            }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <button
                            className={`btn btn-link p-0 text-start w-100 sidebar-link ps-2 text-decoration-none text-secondary fw-semibold`}
                            style={{
                              boxShadow: 'none',
                              fontSize: '0.8rem',
                              transition: 'color 0.2s',
                            }}
                            tabIndex={0}
                            onMouseEnter={e => {
                              if (!item.active) e.currentTarget.classList.add('text-danger');
                            }}
                            onMouseLeave={e => {
                              if (!item.active) e.currentTarget.classList.remove('text-danger');
                            }}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
            {/* Main Content */}
            <main className="bg-white rounded-3 border shadow-sm p-5 flex-grow-1">
              <div>
                <div className="h4 fw-bold text-danger mb-4">Edit Your Profile</div>
                <form className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control mb-2"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control mb-2"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-2"
                      placeholder="Enter your E-mail"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control mb-2"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-12 mt-3 pt-3 border-top">
                    <div className="small fw-bold text-secondary mb-2">Password Changes</div>
                    <div className="row g-2 flex-column">
                      <div className="col-12 mb-2">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="form-control"
                          disabled
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="password"
                          placeholder="New Password"
                          className="form-control"
                          disabled
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-end gap-2 mt-4">
                    <button type="button" className="btn btn-outline-secondary px-4">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-danger px-4 fw-bold">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
