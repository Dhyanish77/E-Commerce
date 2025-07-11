import * as React from "react";
import Layout from '../layouts/Layout';
import { Link } from "gatsby";
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
     
      <div className="pt-4" />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-5 mt-3">
        <ol className="breadcrumb bg-white px-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active fw-bold" aria-current="page">
            404 Error
          </li>
        </ol>
      </nav>

      {/* Centered 404 content */}
      <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '50vh' }}>
        <h1 className="display-1 fw-bold mb-4" style={{ fontSize: '5rem' }} >404 Not Found</h1>
        <p className="fs-5 mb-5">Your visited page not found. You may go home page.</p>
        <Link to="/" className="mt-4 mb-4">
          <Button text="Back to home page" width="240px" />
        </Link>
      </div>
      <div className="pb-5" />
    </Layout>
  );
};

export default NotFoundPage;
