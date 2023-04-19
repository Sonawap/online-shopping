import CategoryCard from 'components/category/categoryCard';
import React from 'react';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { connect } from 'react-redux';
import { setCategories } from 'redux/actions';
import CategoryRequest from 'services/Requests/Category';
import { useEffect } from 'react';
import useLoading from 'hooks/useLoading';

const Landing = props => {
  const { title, setCategories, categories } = props;
  const [loading, withLoading] = useLoading();

	useDocumentTitle(title);

  const getCategories = async () => {
    try {
      const products = await withLoading(CategoryRequest.getAllCategories());
      setCategories(products?.data);
    } catch (error) {
      console.log(error?.message);
    }
  }

  useEffect(() => {
    if(categories?.length < 1){
      getCategories();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      {
        loading 
          ? "Loading Categories and Products" 
          : categories?.length > 0 
            ? categories?.map(category => (
              <CategoryCard category={category} key={category?.id}/>
            ))
            : 
              !loading && <h4>No Category Available</h4>
              
      }
    </>
  )
};

const mapStateToProps = ({category}) => {
  const { categories } = category;
  return { categories }
}

const mapDispatchToProps = {
  setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);