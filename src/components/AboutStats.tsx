import React from 'react';

const stats = [
  {
    icon: 'bi-calendar2-check',
    number: '10.5k',
    title: 'Sellers active our site',
  },
  {
    icon: 'bi-currency-dollar',
    number: '33k',
    title: 'Monthly Product Sale',
  },
  {
    icon: 'bi-bag',
    number: '45.5k',
    title: 'Customer active in our site',
  },
  {
    icon: 'bi-graph-up-arrow',
    number: '25k',
    title: 'Annual gross sale in our site',
  },
];

const AboutStats: React.FC = () => (
  <div className="row text-center justify-content-center mb-5 pt-5">
    {stats.map((stat, idx) => (
      <div key={idx} className="col-12 col-sm-6 col-md-3 mb-4">
        <div
          className="card h-100 shadow-sm border-0 py-4"
          style={{ borderRadius: 12, backgroundColor: 'white', color: 'black', cursor: 'pointer', transition: '0.3s' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#dc3545';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = 'black';
          }}
        >
          <div className="mb-3">
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white"
              style={{ width: 48, height: 48, fontSize: 24 }}
            >
              <i className={`bi ${stat.icon}`}></i>
            </span>
          </div>
          <div className="fw-bold fs-3 mb-1">{stat.number}</div>
          <div className="small fw-semibold" style={{ minHeight: 32 }}>{stat.title}</div>
        </div>
      </div>
    ))}
  </div>
);

export default AboutStats; 