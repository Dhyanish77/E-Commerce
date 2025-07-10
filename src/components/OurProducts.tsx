import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './common/ProductCard';
import Button from './common/Button';

interface OurProductsProps {
  title?: string;
  subtitle?: string;
}

const OurProducts: React.FC<OurProductsProps> = ({
  title = 'Our Products',
  subtitle = 'Explore Our Products',
}) => {
  const products = productsData.products;
  const itemsPerPage = 8;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prev => (prev + itemsPerPage < products.length ? prev + itemsPerPage : 0));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev - itemsPerPage >= 0 ? prev - itemsPerPage : 0));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="container my-5 py-5">
      {/* Heading */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <span className="bg-danger rounded me-3" style={{ width: '20px', height: '40px' }}></span>
        <span className="text-uppercase fs-5 fw-bold text-danger">{title}</span>
      </div>

      {/* Subheading and arrows */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h3 className="mb-3 ms-2">{subtitle}</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm" onClick={handlePrev}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleNext}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Product Grid: 2 rows of 4 */}
      <div className="row">
        {visibleProducts.map(item => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="h-100">
              <ProductCard product={item} />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-3">
        <Button text="View All Products" width="200px" />
      </div>
    </section>
  );
};

export default OurProducts;
