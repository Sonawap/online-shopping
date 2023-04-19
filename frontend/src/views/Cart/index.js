import { useDocumentTitle } from 'hooks/useDocumentTitle';
import React from 'react';
import { connect } from 'react-redux';
import CartItem from 'components/cart/item';
import PaymentRequest from 'services/Requests/Payment';
import useLoading from 'hooks/useLoading';

const Cart = props => {

  const { items, total, title} = props;

  const [loading, withLoading] = useLoading();


  const handleMakePayment = async () => {
    if(items?.length > 0){
      const product_ids = items?.map(item => item?.id);
      try {
        const payment = await withLoading(PaymentRequest.makeAPayment({
          product_ids
        }));
        window.location.replace(payment?.data?.url);
      } catch (error) {
        console.log(error);
      }
    }else{
      alert("You cannot checkout on empty cart");
    }
  }

  useDocumentTitle(title);
  return (
    <div className='chat'>
      <div className="row">
        <div className="col-md-8">
          <h2>Cart</h2>
          {items.map((item) => (
            <div className='my-3' key={item.id}>
              <CartItem product={item} />
              <hr />
            </div>
          ))}
        </div>
        <div className="col-md-3 offset-md-1">
          <div className="bg-info p-3">
            <h2>Summary</h2>
            <h5>Total: ${total.toFixed(2)}</h5>
            {
              items?.length > 0 &&
              <button 
                onClick={handleMakePayment}
                className='btn btn-primary'
                disabled={loading}
              >
                Make Payment
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({cart}) => {
  const { items, total } = cart;
  return { items, total };
}

export default connect(mapStateToProps)(Cart);