import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout';

// image path
const placeholderImg = '/login.png';

const LoginPage: React.FC = () => {

  // State to store input values
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  // State to handle loading/submitting status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for form validation error
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');  // Clear error when input change
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Static credentials
    const email = 'admin';
    const pass = '123';
    if (!formData.emailOrPhone || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (    
      formData.emailOrPhone !== email ||
      formData.password !== pass
    ) {
      setError('Invalid email or password.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Set login flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to home page
      window.location.href = '/';
    }, 1000);
  };

  return (
    <Layout>
      <div
        className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-white"
        style={{ padding: 0 }}
      >
        <div className="row w-100" style={{ minHeight: '80vh' }}>
          {/* Left: Image */}
          <div
            className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-light"
            style={{ padding: 0 }}
          >
            <img
              src={placeholderImg}
              alt="E-commerce visual"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Right: Form */}
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            style={{ padding: 0 }}
          >
            {/* Heading and subtitle */}
            <div className="w-100" style={{ maxWidth: 400, margin: '0 auto', padding: '40px 0' }}>
              <h2 className="fw-bold mb-2" style={{ fontSize: '2rem' }}>
                Welcome Back
              </h2>
              <div className="mb-4 text-muted" style={{ fontSize: '1rem' }}>
                Log in to your account
              </div>

              {/* Login form */}
              <form onSubmit={handleSubmit} autoComplete="off">
                {/* Email or phone input */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-0 px-0 shadow-none"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    style={{ background: 'transparent' }}
                  />
                </div>

                {/* Password input */}
                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control border-0 border-bottom rounded-0 px-0 shadow-none"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ background: 'transparent' }}
                  />

                  {/* Toggle visibility button */}
                  <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-0 mt-1 px-2"
                    style={{ textDecoration: 'none', color: '#888' }}
                    tabIndex={-1}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>

                {/* Forgot password button */}
                <div className="mb-3 text-end">
                  <button
                    type="button"
                    className="btn btn-link px-0"
                    style={{ textDecoration: 'underline', color: '#262626', fontWeight: 500 }}
                    onClick={() => alert('Forgot password functionality coming soon!')}
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Error message display */}
                {error && (
                  <div className="text-danger mb-2" style={{ fontSize: '0.95rem' }}>
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn w-100 mb-2"
                  style={{
                    background: '#DB4444',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: 4,
                    padding: '10px 0',
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Log In'}
                </button>

                {/* Link to signup page */}
                <div className="text-center mt-2" style={{ fontSize: '1rem' }}>
                  New user?{' '}
                  <Link
                    to="/signup"
                    style={{ color: '#262626', fontWeight: 500, textDecoration: 'underline' }}
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage; 