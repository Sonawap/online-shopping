import { useDocumentTitle } from 'hooks/useDocumentTitle';
import React from 'react';

const NotFound = props => {
  
  const { title } = props;

  useDocumentTitle(title);
  return (
    <h4>Not found</h4>
  )
};

export default NotFound;