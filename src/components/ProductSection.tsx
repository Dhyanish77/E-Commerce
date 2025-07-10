import React, { useRef } from 'react';
import { Link } from 'gatsby';
import Button from '../components/common/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  rating: number;
  reviewCount: number;
}

interface Props {
  sectionLabel?: string;
  title: string;
  products: Product[];
  viewAllLink?: string;
  scrollable?: boolean;
}

const ProductSection: React.FC<Props> = ({
  sectionLabel,
  title,
  products,
  viewAllLink,
  scrollable = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const amount = dir === 'left' ? -220 : 220;
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-5 pb-5">
      {/* Heading Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="mb-1">
          {sectionLabel && (
            <div className="d-flex align-items-center gap-2 mb-3">
              <span
                className="bg-danger rounded me-3"
                style={{ width: '20px', height: '40px', display: 'inline-block' }}
              />
              <small className="text-uppercase fs-5 fw-bold text-danger">{sectionLabel}</small>
            </div>
          )}
          <h3 className="mb-4 ms-2">{title}</h3>
        </div>

        {scrollable ? (
          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary  btn-sm rounded-circle"
              onClick={() => scroll('left')}
              style={{ backgroundColor: 'lightgray' }}
            >
              &larr;
            </button>
            <button
              className="btn btn-secondary btn-sm rounded-circle"
              onClick={() => scroll('right')}
              style={{ backgroundColor: 'lightgray' }}
            >
              &rarr;
            </button>
          </div>
        ) : viewAllLink ? (
          <Link to={viewAllLink} className="btn btn-danger btn-sm text-white px-4">
            View All
          </Link>
        ) : null}
      </div>

      {/* Products Row */}
      <div className={scrollable ? 'd-flex overflow-auto gap-4 py-3' : 'row'} ref={containerRef}>
        {(scrollable ? products : products.slice(0, 4)).map(item => (
          <div
            key={item.id}
            className={scrollable ? '' : 'col-md-3'}
            style={{ flex: scrollable ? '0 0 auto' : undefined }}
          >
            <div
              className="card border-0 shadow-lg"
              style={{ width: scrollable ? '250px' : '100%'  }}
            >
              <div className="position-relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: '260px', objectFit: 'cover' }}
                />
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  -{item.discount}%
                </span>
                <i className="bi bi-heart position-absolute top-0 end-0 m-2 text-dark"></i>
              </div>
              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{ fontSize: '1rem' }}>
                  {item.name}
                </h6>
                <p className="mb-1">
                  <span className="text-danger fw-bold">${item.price}</span>
                  <span className="text-muted text-decoration-line-through ms-2">
                    ${(item.price * (100 / (100 - item.discount))).toFixed(2)}
                  </span>
                </p>
                <div className="d-flex align-items-center">
                  <div className="text-warning me-2">
                    {'★'.repeat(Math.round(item.rating))}
                    {'☆'.repeat(5 - Math.round(item.rating))}
                  </div>
                  <small className="text-muted">({item.reviewCount})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      {scrollable && (
        <div className="text-center mt-4">
          <Button text="View All Products" width="200px" />
        </div>
      )}
    </section>
  );
};

export default ProductSection;
