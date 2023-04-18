import React from 'react';

const ProductCard = () => {
  return (
    <div className="card mb-3 shadow-sm">
      <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Product Name</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem euismod, bibendum orci nec, suscipit eros.</p>
        <p className="card-text"><strong>Price: $99.99</strong></p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;