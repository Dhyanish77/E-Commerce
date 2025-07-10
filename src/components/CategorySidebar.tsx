import React from 'react';
import { Link } from 'gatsby';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const CategorySidebar: React.FC = () => (
  <aside className="d-none d-lg-block col-lg border-end border-secondary pe-3">
    <h6 className="fw-semibold mb-3">Categories</h6>
    <nav className="list-group">
      {categories.map(name => (
        <Link
          key={name}
          to={`/category/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="list-group-item list-group-item-action border-0"
        >
          {name}
        </Link>
      ))}
    </nav>
  </aside>
);

export default CategorySidebar;
