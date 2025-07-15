import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout';
import productsData from '../data/products.json';

const CartPage = () => {
  // Extract the first two products from products.json
  const products = productsData.products || productsData;
  const initialCartItems = products.slice(0, 2).map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image.startsWith('/image/products/') ? `/static${product.image}` : product.image,
  }));

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState('');

  useEffect(() => {
    setCartItems(initialCartItems);
    // eslint-disable-next-line
  }, []);

  const handleQuantityChange = (id, value) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: Number(value) } : item))
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="min-vh-100">
        <div className="container py-4 mb-5">
          <div className="cart-page" style={{ padding: '2rem 0' }}>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-5 mt-3">
              <ol className="breadcrumb bg-white px-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>

            {/* Cart Table */}
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '1.5rem',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 3px 5px #cfcfcf',
              }}
            >
              <thead>
                <tr style={{ background: '#fafafa' }}>
                  <th style={{ textAlign: 'left', padding: '1rem' }}>Product</th>
                  <th style={{ padding: '1rem' }}>Price</th>
                  <th style={{ padding: '1rem' }}>Quantity</th>
                  <th style={{ padding: '1rem' }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }}
                      />
                      {item.name}
                    </td>
                    <td style={{ textAlign: 'start', padding: '1rem' }}>${item.price}</td>
                    <td style={{ textAlign: 'start', padding: '1rem' }}>
                      <select
                        value={item.quantity}
                        onChange={e => handleQuantityChange(item.id, e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(q => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td style={{ textAlign: 'start', padding: '1rem' }}>
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <Link
                to="/"
                style={{
                  padding: '0.75rem 2rem',
                  border: '1px solid #222',
                  borderRadius: 4,
                  background: '#fff',
                  color: '#222',
                  textDecoration: 'none',
                }}
              >
                Return To Shop
              </Link>
              <button
                style={{
                  padding: '0.75rem 2rem',
                  border: '1px solid #222',
                  borderRadius: 4,
                  background: '#fff',
                  color: '#222',
                }}
              >
                Update Cart
              </button>
            </div>

            {/* Coupon and Cart Total */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              {/* Coupon */}
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  style={{
                    padding: '0.75rem',
                    width: '60%',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    marginRight: 8,
                  }}
                />
                <button
                  style={{
                    padding: '0.75rem 2rem',
                    background: '#EB5757',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                  }}
                >
                  Apply Coupon
                </button>
              </div>
              {/* Cart Total */}
              <div
                style={{
                  minWidth: 320,
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  padding: '2rem',
                  background: '#fff',
                }}
              >
                <h3 style={{ marginBottom: 16 }}>Cart Total</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 'bold',
                    marginBottom: 24,
                  }}
                >
                  <span>Total:</span>
                  <span>${subtotal}</span>
                </div>
                <Link
                  to="/checkout"
                  style={{
                    width: '100%',
                    display: 'inline-block',
                    padding: '0.75rem',
                    background: '#EB5757',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
