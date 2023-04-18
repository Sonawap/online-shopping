import ProductCard from 'components/product/productCard';
import React from 'react';

const CategoryCard = () => {
  return (
    <div className="category my-4">
      <div className='d-flex justify-content-between align-items-center'>
        <h4>Category Name</h4>
        <h6>More</h6>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default CategoryCard;