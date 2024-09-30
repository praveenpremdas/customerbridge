"use client"
import EditProfileContainer from "@/Components/Applications/Users/EditProfile";
import React, { useState, useEffect } from "react";
import { crmAxiosInstance } from "@/utils/axiosInstance"
import { CustomerProfileProps } from "@/Types/EcommerceType";
import { useAppDispatch } from "@/Redux/Hooks";
import { toggleEditTrue } from "@/Redux/Reducers/ProfileSlice";
import { updateCustomerField, Customer } from "@/Redux/Reducers/CustomerSclice";

const CustomerProfile: React.FC<CustomerProfileProps> = ({ params }) => {

  const dispatch = useAppDispatch();
  const { customerId } = params;
  const [customer, setCustomer] = useState({});
  const editNecassoryVaules = ['firstName', 'lastName', 'email', 'phoneNumber', 'gender', 'dateOfBirth', 'nationality', 'active', 'addresses', 'contactNumbers', 'feedbacks', 'interactions', 'notes', 'preferences', 'purchaseHistory', 'socialMediaProfiles', 'tags'];

  const fetch = async () => {
    if (customerId) {
      const response = await crmAxiosInstance.get('customers/' + customerId);
      setCustomer(response.data);
      for (var i in editNecassoryVaules) {
        let name = editNecassoryVaules[i];
        let value = response.data[name];
        dispatch(updateCustomerField({ field: name as keyof Customer, value }));
      }
    }
  }

  useEffect(() => {
    dispatch(toggleEditTrue());
    fetch();
  }, []);

  return (<>
    <EditProfileContainer props={customer} />
  </>)
};

export default CustomerProfile;



