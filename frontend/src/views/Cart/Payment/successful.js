import { useDocumentTitle } from 'hooks/useDocumentTitle';
import React from 'react';

const PaymentSuccess = ({title}) => {
  useDocumentTitle(title);
  return (
    <h5 className="text-center">Payment successful</h5>
  )
}

export default PaymentSuccess;