import React from 'react';
import { useParams } from 'react-router-dom';
import ShowSingleInvoice from '../utils/ShowSingleInvoice'

const ShowInvoice =()=> {
  const { invoiceID } = useParams();
  return (

    <ShowSingleInvoice
      invoiceID={invoiceID}
    />
  );
};

export default ShowInvoice;
