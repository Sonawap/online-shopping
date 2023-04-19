import { useDocumentTitle } from 'hooks/useDocumentTitle';
import React from 'react';
import { connect } from 'react-redux';
import CartItem from 'components/cart/item';

const Cart = props => {

  const { items, total, title} = props;

  useDocumentTitle(title);
  return (
    <div className='chat'>
      <h2>Cart</h2>
      {items.map((item) => (
        <div className='my-3' key={item.id}>
          <CartItem product={item} />
          <hr />
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
};

const mapStateToProps = ({cart}) => {
  const { items, total } = cart;
  return { items, total };
}

export default connect(mapStateToProps)(Cart);