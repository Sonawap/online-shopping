import React from 'react';
import PropTypes from 'prop-types';
import { CategoryDefaultProps } from 'data/CategoryDefaultProps';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from 'redux/actions/Cart';
import { useState, useEffect } from 'react';

const ProductCard = props => {
  const { product, addItem, items } = props;
  const [ itemIsInCart, setItemIsInCart ] = useState(false);

  const handleAddItemToCart = () => {
    addItem(product);
    setItemIsInCart(!itemIsInCart);
  }


  const handleCheckIfItemIsInCart = () => {
    const item = items?.filter(item => item?.id === product?.id);
    if(item[0]){
      setItemIsInCart(!itemIsInCart);
    }
  }

  useEffect(() => {
    handleCheckIfItemIsInCart();
  }, [])

  return (
    <div className="card mb-3 shadow-sm">
      <img src={product.avatar ?? "https://via.placeholder.com/300x200"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product?.name}</h5>
        <p className="card-text">{product?.description}</p>
        <p className="card-text"><strong>Price: ${product?.price.toFixed(2)}</strong></p>
        <div className="d-grid gap-2">
          <button 
            className="btn btn-primary" 
            onClick={handleAddItemToCart}
            disabled={itemIsInCart}
          >
            {itemIsInCart ? "Already in cart" : "Add to Cart"}
          </button>
          <Link 
            className="btn btn-secondary"
            to={`/product/${product?.id}`}
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

const mapStateToProps = ({ cart }) => {
  const { items } = cart;
  return { items }
}

const mapDispatchToProps = {
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);