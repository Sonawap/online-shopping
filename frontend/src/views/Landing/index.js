import CategoryCard from 'components/category/categoryCard';
import React from 'react';
import { useDocumentTitle } from 'hooks/useDocumentTitle';

const Landing = props => {
  const { title } = props;

	useDocumentTitle(title);
  
  return (
    <>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </>
  )
};

export default Landing;