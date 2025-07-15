import React from 'react';
import Layout from '../layouts/Layout';
import productsDataRaw from '../data/products.json';
import WishlistSection from '../components/WishlistSection';
import JustForYouSection from '../components/JustForYouSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'gatsby';

const productsData = (productsDataRaw as any).products || [];
const wishlistItems = productsData.slice(0, 4);
const justForYou = productsData.slice(4, 8);

const Wishlist = () => (
  <Layout>
    <div className="container py-5">
      <div className="mb-5">
        <button className="btn btn-outline-dark float-end">Move All To Bag</button>
      </div>
      <h5 className="fw-bold mb-4">Wishlist ({wishlistItems.length})</h5>

      <WishlistSection products={wishlistItems} />

      <div className="clearfix" />
      <div className="d-flex align-items-center mb-3 mt-5">
        <span className="me-2" style={{ color: '#DB4444', fontSize: '1.5rem' }}>
          <i className="bi bi-square-fill" />
        </span>
        <span className="fw-bold">Just For You</span>
        <button className="btn btn-outline-dark ms-auto">See All</button>
      </div>
      <JustForYouSection products={justForYou} />
    </div>
  </Layout>
);

export default Wishlist;
