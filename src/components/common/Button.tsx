// src/components/Button.tsx
import React from 'react';

const Button = ({ text, width = '150px' }) => (
  <button className="btn btn-danger text-white fw-medium" style={{ width }}>
    {text}
  </button>
);

export default Button;
