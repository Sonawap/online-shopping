import ProductCard from 'components/product/productCard';
import React from 'react';
import PropTypes from 'prop-types';
import { CategoryDefaultProps } from 'data/CategoryDefaultProps';
import { Link } from 'react-router-dom';

const CategoryCard = props => {

  const { category, showMore } = props;

  return (
    <div className="category my-4">
      <div className='d-flex justify-content-between align-items-center'>
        <h4>{ category?.name }</h4>
        {
          showMore &&
          <Link
            to={`category/${category?.id}`}
            >
              More
          </Link>
        }
      </div>
      <div className="row">
        {
          category?.products?.length > 0 
          ? category?.products?.map(product => (
            <div className="col-md-3" key={product?.id}>
              <ProductCard product={product}/>
            </div>
          ))
          : <h4>No Products Available</h4>
        }
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  category : PropTypes.object,
  showMore: PropTypes.bool
}

CategoryCard.defaultProps = {
  category : CategoryDefaultProps,
  showMore: true
}

export default CategoryCard;