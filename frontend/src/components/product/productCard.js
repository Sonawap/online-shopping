import React from 'react';
import PropTypes from 'prop-types';
import { CategoryDefaultProps } from 'data/CategoryDefaultProps';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  const { product } = props;
  return (
    <div className="card mb-3 shadow-sm">
      <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product?.name}</h5>
        <p className="card-text">{product?.description}</p>
        <p className="card-text"><strong>Price: ${product?.price}</strong></p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary">Add to Cart</button>
          <Link 
            className="btn btn-secondary"
            to={`product/${product?.id}`}
            >
              View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product : PropTypes.object
}

ProductCard.defaultProps = {
  product : CategoryDefaultProps?.products?.[0]
}

export default ProductCard;