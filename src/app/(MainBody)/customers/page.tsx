'use client'
import ProductListContainer from "@/Components/Applications/Ecommerce/ProductList";
import React from "react";
import { Button } from "reactstrap";
import Link from 'next/link';


const Customers = () => {


  return (<>
  <div className="d-flex justify-content-end w-100">
  <Link href="/addcustomer">
      <Button
        color="primary"
        size="sm"
        className="mb-3 mt-2 me-3"
        style={{ width: '120px', height: '50px' }}
      >
        <i className="fa fa-pencil" /> Add Customer
      </Button>
      </Link>
    </div>
    <ProductListContainer/>
  </>)
};


export default Customers;



