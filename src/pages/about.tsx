import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'gatsby';
import AboutStats from '../components/AboutStats';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/Services';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-5 mt-3">
        <ol className="breadcrumb bg-white px-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
            About
          </li>
        </ol>
      </nav>

      {/* Story Section */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 gap-5">
        {/* Left: Heading and Description */}
        <div className="flex-fill" style={{ minWidth: 250 }}>
          <h2 className="fw-bold mb-4" style={{ letterSpacing: '3px' }}>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-fill d-flex justify-content-center">
          <img src="/about.jpg" alt="Our Story" className="img-fluid rounded" style={{  width: '100%' }} />
        </div>
      </div>

      {/* Stats Section */}
      <AboutStats />

      {/* Team Section */}
      <TeamSection />

      {/* Service Section */}
      <ServicesSection/>

    </Layout>
  );
};

export default AboutPage; 