import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'bi-truck',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: 'bi-headset',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: 'bi-shield-check',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  return (
    <section className="container my-5 py-5"> 
      <div className="row text-center m-100px">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{ width: '70px', height: '70px', backgroundColor: '#ccc' }}
              >
                <div
                  className="rounded-circle bg-dark d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className={`bi ${service.icon} text-white fs-5`}></i>
                </div>
              </div>
              <h6 className="fw-bold text-uppercase mb-1">{service.title}</h6>
              <p className="text-muted small mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
