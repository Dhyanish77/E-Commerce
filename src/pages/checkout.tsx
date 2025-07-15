import React from 'react';
import Layout from '../layouts/Layout';
import Button from '../components/common/Button';
import { Link } from 'gatsby';
import productsData from '../data/products.json';

const sampleProducts = (productsData as any).products?.slice(0, 2) || [];

const CheckoutPage: React.FC = () => {
  const subtotal = sampleProducts.reduce((sum, p) => sum + p.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="pt-3" />
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-5 mt-3">
        <ol className="breadcrumb bg-white px-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Cart</li>
          <li className="breadcrumb-item active fw-bold" aria-current="page">
            CheckOut
          </li>
        </ol>
      </nav>
      <h2 className="fw-bold mb-4">Billing Details</h2>
      <div className="row g-5">
        {/* Left: Billing Form */}
        <div className="col-12 col-md-7">
          <form className="bg-white p-4 rounded-3 shadow-sm">
            <div className="mb-3">
              <label className="form-label small text-secondary">First Name*</label>
              <input type="text" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Company Name</label>
              <input type="text" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Street Address*</label>
              <input type="text" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Apartment, floor, etc. (optional)</label>
              <input type="text" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Town/City*</label>
              <input type="text" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Phone Number*</label>
              <input type="tel" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">Email Address*</label>
              <input type="email" className="form-control" style={{ background: '#f8f9fa' }} />
            </div>
            <div className="form-check mt-3 mb-2">
              <input className="form-check-input" type="checkbox" id="saveInfo" />
              <label className="form-check-label small" htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        {/* Right: Order Summary */}
        <div className="col-12 col-md-5">
          <div className="bg-white p-4 rounded-3 shadow-sm mb-4">
            {/* Product List */}
            {sampleProducts.map((item, idx) => (
              <div className="d-flex align-items-center mb-3" key={item.id}>
                <img src={item.image} alt={item.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 8 }} className="me-3" />
                <div className="flex-grow-1">{item.name}</div>
                <div className="fw-bold">${item.price}</div>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            {/* Payment Options */}
            <div className="mb-3">
              <div className="form-check d-flex align-items-center justify-content-between">
                <div>
                  <input className="form-check-input" type="radio" name="payment" id="bank" />
                  <label className="form-check-label ms-2" htmlFor="bank">Bank</label>
                </div>
                <div>
                  <i className="bi bi-credit-card-2-front-fill fs-4 me-2" title="Visa" style={{ color: '#1a1f71' }}></i>
                  <i className="bi bi-credit-card fs-4 me-2" title="Mastercard" style={{ color: '#eb001b' }}></i>
                  <i className="bi bi-paypal fs-4 me-2" title="PayPal" style={{ color: '#003087' }}></i>
                  <i className="bi bi-currency-bitcoin fs-4" title="Bitcoin" style={{ color: '#f7931a' }}></i>
                </div>
              </div>
              <div className="form-check mt-2">
                <input className="form-check-input" type="radio" name="payment" id="cod" defaultChecked />
                <label className="form-check-label" htmlFor="cod">Cash on delivery</label>
              </div>
            </div>
            {/* Coupon */}
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Coupon Code" />
              <button className="btn btn-danger" type="button">Apply Coupon</button>
            </div>
            {/* Place Order Button */}
            <div className="d-grid mt-3">
              <Button text="Place Order" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5" />
    </Layout>
  );
};

export default CheckoutPage; 