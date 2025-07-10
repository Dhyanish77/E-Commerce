import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  colors?: string[]; // optional colors
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const originalPrice = product.discount
    ? (product.price * 100) / (100 - product.discount)
    : product.price;

  return (
    <div className="card border-0 shadow-sm">
      <div className="position-relative">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: '300px' }}
        />

        {product.discount && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            -{product.discount}%
          </span>
        )}

        {product.isNew && (
          <span className="badge bg-success position-absolute top-0 end-0 m-2">
            NEW
          </span>
        )}
      </div>

      <div className="card-body p-2">
        <h6 className="card-title mb-1" style={{ fontSize: '0.9rem' }}>
          {product.name}
        </h6>

        <p className="mb-1">
          <span className="text-danger fw-bold">${product.price}</span>{' '}
          {product.discount && (
            <span className="text-muted text-decoration-line-through ms-2">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </p>

        <div className="d-flex align-items-center mb-2">
          <div className="text-warning me-2">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
          </div>
          <small className="text-muted">({product.reviewCount})</small>
        </div>

        {product.colors && (
          <div className="d-flex gap-2">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="rounded-circle d-inline-block border"
                style={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: color,
                }}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
