import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from 'redux/actions';

const CartItem = props => {

  const { product, removeItem } = props;

  const removeItemFromCart = () => {
    removeItem(product)
  }

  return (
    <div className='chat-item'>
      <div className="d-flex">
        <div className="flex-shrink-0">
          <img src={ product.avatar ?? "https://via.placeholder.com/300x200" } width={300} height={200} alt={product?.name} />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5>{product?.name}</h5>
          <p>${product?.price.toFixed(2)}</p>
          <button className='btn btn-primary' onClick={removeItemFromCart}>Remove</button>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  removeItem
}

export default connect(null, mapDispatchToProps)(CartItem);