"use client"
import EditProfileContainer from "@/Components/Applications/Users/EditProfile";
import React, { useState, useEffect } from "react";
import { CustomerProfileProps } from "@/Types/EcommerceType";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { toggleEditFalse } from "@/Redux/Reducers/ProfileSlice";


const CustomerProfile: React.FC<CustomerProfileProps> = () => {

    const dispatch = useAppDispatch();
    const isProfileEditDisabled = useAppSelector((state) => state.profile.isProfileEditDisabled);
    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        contactNumbers: [
            {
                type: "home",
                number: ""
            },
            {
                type: "work",
                number: ""
            },
            {
                type: "emergency",
                number: ""
            }
        ],
        addresses: [
            {
                type: "home",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                country: ""
            },
            {
                type: "business",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                country: ""
            },
            {
                type: "emergency",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                country: ""
            }
        ],
        dateOfBirth: "",
        gender: "",
        loyaltyPoints: 0,
        customerType: "",
        active: false,
        createdDate: "",
        lastModifiedDate: "",
        preferredContactMethod: "",
        preferredLanguage: "",
        occupation: "",
        company: "",
        website: "",
        profilePictureUrl: "",
        nationality: "",
        socialSecurityNumber: "",
        maritalStatus: "",
        spouseName: "",
        childrenNames: "",
        preferences: [
            {
                type: "product",
                value: ""
            },
            {
                type: "service",
                value: ""
            }
        ],
        education: "",
        socialMediaProfiles: [],
        referralSource: "",
        membershipLevel: "",
        hobbies: "",
        lastPurchaseDate: "",
        tags: [


        ],
        subscribedToNewsletter: false,
        interactions: [
            {
                id: '',
                type: "",
                date: '',
                details: ""
            }
        ],
        notes: [],
        documents: [],
        feedbacks: [],
    });


    useEffect(() => {
        dispatch(toggleEditFalse());
    }, [])


    return <EditProfileContainer props={customer} />
};


export default CustomerProfile;



