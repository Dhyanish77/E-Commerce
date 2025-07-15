import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import '../styles/global.css';
import productsData from '../data/products.json';
import ProductCard from '../components/common/ProductCard';

const product = {
  name: 'Havic HV G-92 Gamepad',
  price: 192.0,
  oldPrice: 220.0,
  inStock: true,
  rating: 4.5,
  reviews: 150,
  description:
    'Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  colours: [
    { name: 'White', value: '#fff' },
    { name: 'Red', value: '#c00' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    '/images/gamepad1.jpg',
    '/images/gamepad2.jpg',
    '/images/gamepad3.jpg',
    '/images/gamepad4.jpg',
  ],
};

const relatedItems = productsData.products.slice(0, 4);

const RelatedItemsSection: React.FC<{ products: any[] }> = ({ products }) => (
  <div className="row g-4 mb-4">
    {products.map((item) => (
      <div className="col-md-3" key={item.id}>
        <div className="position-relative h-100">
          <button className="btn btn-link text-dark position-absolute top-0 end-0 m-2 p-0" style={{zIndex:2}}><i className="bi bi-heart" /></button>
          <ProductCard product={item} />
          <div className="d-grid mt-2">
            <button className="btn btn-dark w-100"><i className="bi bi-cart2 me-2" />Add To Cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColour, setSelectedColour] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const [quantity, setQuantity] = useState(1);

  return (
    <Layout>
      <div className="product-detail-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>
          Account / Gaming / <span style={{ color: '#222' }}>{product.name}</span>
        </div>
        <div style={{ display: 'flex', gap: 40 }}>
          {/* Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {product.images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt="thumb"
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: 'cover',
                    border: selectedImage === idx ? '2px solid #222' : '1px solid #eee',
                    borderRadius: 8,
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
            <img
              src={product.images[selectedImage]}
              alt="main"
              style={{ width: 350, height: 350, objectFit: 'cover', borderRadius: 12 }}
            />
          </div>
          {/* Product Info */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontWeight: 600 }}>{product.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
              <span style={{ color: '#FFD700' }}>★</span>
              <span>{product.rating} ({product.reviews} Reviews)</span>
              <span style={{ color: '#27ae60', marginLeft: 12 }}>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, margin: '12px 0' }}>
              ${product.price.toFixed(2)}
            </div>
            <div style={{ color: '#666', marginBottom: 16 }}>{product.description}</div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 4 }}>Colours:</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {product.colours.map((c, idx) => (
                  <span
                    key={c.value}
                    onClick={() => setSelectedColour(idx)}
                    style={{
                      display: 'inline-block',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: c.value,
                      border: selectedColour === idx ? '2px solid #222' : '1px solid #ccc',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ marginBottom: 4 }}>Size:</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {product.sizes.map((s, idx) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(idx)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 6,
                      border: selectedSize === idx ? '2px solid #222' : '1px solid #ccc',
                      background: selectedSize === idx ? '#222' : '#fff',
                      color: selectedSize === idx ? '#fff' : '#222',
                      cursor: 'pointer',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '16px 0' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '4px 12px' }}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '4px 12px' }}>+</button>
              <button style={{ marginLeft: 24, padding: '8px 32px', background: '#DB4444', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>
                Buy Now
              </button>
              <button style={{ marginLeft: 8, padding: '8px', background: '#fff', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer' }}>
                ♥
              </button>
            </div>
            <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginTop: 16, background: '#fafafa' }}>
              <div style={{ marginBottom: 8 }}>
                <b>Free Delivery</b> <span style={{ color: '#888', fontSize: 13 }}>Enter your postal code for Delivery Availability</span>
              </div>
              <div>
                <b>Return Delivery</b> <span style={{ color: '#888', fontSize: 13 }}>Free 30 Days Delivery Returns. Details</span>
              </div>
            </div>
          </div>
        </div>
        {/* Related Items */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontWeight: 600, marginBottom: 24 }}>Related Item</h3>
          <RelatedItemsSection products={relatedItems} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail; 