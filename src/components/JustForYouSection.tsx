import React from 'react';
import ProductCard from './common/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  colors?: string[];
}

interface JustForYouSectionProps {
  products: Product[];
}

const JustForYouSection: React.FC<JustForYouSectionProps> = ({ products }) => (
  <div className="row g-4">
    {products.map((item) => (
      <div className="col-md-3" key={item.id}>
        <div className="position-relative h-100">
          <button className="btn btn-link text-dark position-absolute top-0 end-0 m-2 p-0" style={{zIndex:2}}><i className="bi bi-eye" /></button>
          <ProductCard product={{
            ...item,
            image: item.image.startsWith('/image/products/') ? '/static' + item.image : item.image
          }} />
          <div className="d-grid mt-2">
            <button className="btn btn-dark w-100"><i className="bi bi-cart2 me-2" />Add To Cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default JustForYouSection; 