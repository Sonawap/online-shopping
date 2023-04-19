import useLoading from 'hooks/useLoading';
import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentProduct, addItem } from 'redux/actions';
import ProductRequest from 'services/Requests/Product';

const ProductDetail = props => {

  const { currentProduct, setCurrentProduct, items, addItem } = props;
  const [ itemIsInCart, setItemIsInCart ] = useState(false);
  const [loading, withLoading] = useLoading();

  const { id } = useParams();


  const handleAddItemToCart = () => {
    addItem(currentProduct);
    setItemIsInCart(!itemIsInCart);
  }


  const HandleGetAProduct = async () => {
    try {
      const product = await withLoading(ProductRequest.getAProduct(id));
      setCurrentProduct(product?.data);
      const item = items?.filter(item => item?.id === product?.data?.id);
      if(item[0]){
        setItemIsInCart(!itemIsInCart);
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    HandleGetAProduct();
  }, [])

  return (
    <>
    {
      loading ? 
        <h4>Loading Product ...</h4>
        :
        <div className="container">
          <h1 className="mt-4 mb-3">{currentProduct?.name}</h1>
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid rounded mb-4" src="https://via.placeholder.com/500x500" alt="Product" />
            </div>
            <div className="col-lg-6">
              <h3>Product Description</h3>
              <p>{currentProduct?.description}</p>
              <h4>Product Details</h4>
              <h4>{currentProduct?.price}</h4>
              <button 
                className="btn btn-primary" 
                disabled={itemIsInCart}
                onClick={handleAddItemToCart}
              >
                {itemIsInCart ? "Already in cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
    }
    </>
  )
}

const mapStateToProps = ({product, cart}) => {
  const { currentProduct } = product;
  const { items } = cart;
  return { currentProduct, items }
}

const mapDispatchToProps = {
  setCurrentProduct,
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
