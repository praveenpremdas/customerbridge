"use client"
import EditProfileContainer from "@/Components/Applications/Users/EditProfile";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CustomerProfileProps } from "@/Types/EcommerceType";


const CustomerProfile: React.FC<CustomerProfileProps> = ({ params }) => {


  const { customerId } = params;
  const [customer, setCustomer] = useState({});


  const fetch = async () => {
    if (customerId) {
      const response = await axios.get('http://3.111.179.125:8080/api/customers/' + customerId);
      setCustomer(response.data);
    }
  }


  useEffect(() => {
    fetch();
  }, []);


  return (<>
    <EditProfileContainer props={customer} />
  </>)
};


export default CustomerProfile;



