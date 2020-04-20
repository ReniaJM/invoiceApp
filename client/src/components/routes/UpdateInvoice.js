import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateSingleInvoice from '../utils/UpdateSingleInvoice';

const UpdateInvoice =()=> {
  const { invoiceID } = useParams();
  return (
    <UpdateSingleInvoice
      invoiceID={invoiceID}
    />
  );
}

export default UpdateInvoice;
