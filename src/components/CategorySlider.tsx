// src/components/CategorySlider.tsx
import React, { useRef, useState } from 'react';

const categories = [
  { label: 'Phones', icon: 'bi-phone' },
  { label: 'Computers', icon: 'bi-laptop' },
  { label: 'SmartWatch', icon: 'bi-smartwatch' },
  { label: 'Camera', icon: 'bi-camera' },
  { label: 'HeadPhones', icon: 'bi-headphones' },
  { label: 'Gaming', icon: 'bi-controller' },
];

const CategorySlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('');

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const distance = dir === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-5 py-5">
      {/* Heading */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <span
          className="d-inline-block bg-danger rounded me-3 "
          style={{ width: '20px', height: '40px' }}
        ></span>
        <span className="text-uppercase text-danger fs-4 fw-bold ms-2">Categories</span>
      </div>

      {/* Subheading with arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-3">Browse By Category</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => scroll('left')}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => scroll('right')}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Category Items */}
      <div className="d-flex gap-4 overflow-auto pb-4 " ref={scrollRef}>
        {categories.map(cat => (
          <div
            key={cat.label}
            role="button"
            onClick={() => setActive(cat.label)}
            className={`text-center border rounded p-3 d-flex flex-column align-items-center justify-content-center shadow-sm`}
            style={{
              minWidth: '160px',
              height: '135px',
              backgroundColor: active === cat.label ? '#dc3545' : 'white',
              color: active === cat.label ? 'white' : 'black',
              transition: '0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              if (active !== cat.label)
                ((e.currentTarget.style.backgroundColor = '#dc3545'),
                  (e.currentTarget.style.color = 'white'));
            }}
            onMouseLeave={e => {
              if (active !== cat.label)
                ((e.currentTarget.style.backgroundColor = 'white'),
                  (e.currentTarget.style.color = 'black'));
            }}
          >
            <i className={`bi ${cat.icon} fs-1 mb-2`}></i>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
