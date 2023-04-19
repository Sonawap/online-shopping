import { useDocumentTitle } from 'hooks/useDocumentTitle';
import React from 'react';

const PaymentCancel = ({title}) => {
  useDocumentTitle(title);
  return (
    <h5 className="text-center">Payment cancelled</h5>
  )
}

export default PaymentCancel;