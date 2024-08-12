import React from 'react';
import { CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonUserFormGroup from '../Common/CommonUserFormGroup';
import { useAppSelector } from "@/Redux/Hooks";


// Define the props type according to the JSON data structure
interface EditProfileFormBodyProps {
  props: {
    gender: string;
    loyaltyPoints: string;
    customerType: string;
    active: boolean;
    dateOfBirth: number;
    createdDate: number;
    lastModifiedDate: number;
    lastPurchaseDate: number;
    preferredContactMethod: string;
    preferredLanguage: string;
    occupation: string;
    company: string;
    website: string;
    nationality: string;
    maritalStatus: string;
    spouseName: string;
    childrenNames: string;
    socialSecurityNumber: string;
    referralSource: string;
    membershipLevel: string;
    hobbies: string;
    subscribedToNewsletter: boolean;
    education: string;
  };
}


const formatDate = (timestamp: number): string => {
  let date = '';
  if (timestamp) {
    let newDate = new Date(timestamp);
    date = newDate.toISOString().split('T')[0]
  }
  return date; // Returns YYYY-MM-DD


};




export const EditProfileFormBody: React.FC<EditProfileFormBodyProps> = ({ props }) => {
  const style = {
    fontSize: 'small'
  };
  const isProfileEditDisabled = useAppSelector((state) => state.profile.isProfileEditDisabled);


  return (
    <CardBody>
      <Row>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="text" title="Gender" placeholder={props.gender} isDisabled={isProfileEditDisabled} feildName="gender"/>
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="number" title="Loyalty Points" placeholder={props.loyaltyPoints} isDisabled={isProfileEditDisabled} feildName="loyaltyPoints"/>
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="text" title="Customer Type" placeholder={props.customerType} isDisabled={isProfileEditDisabled} feildName="customerType"/>
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="text" title="Active" placeholder={props.active ? "Yes" : "No"} isDisabled={isProfileEditDisabled} feildName="active"/>
        </Col>


        <Col md="3">
          <CommonUserFormGroup type="date" title="Date of Birth" defaultValue={props.dateOfBirth ? formatDate(props.dateOfBirth) : ''} isDisabled={isProfileEditDisabled} feildName="dateOfBirth"/>
        </Col>
        <Col md="3">
          <CommonUserFormGroup type="date" title="Created Date" defaultValue={props.createdDate ? formatDate(props.createdDate) : ''} isDisabled={isProfileEditDisabled} feildName="createdDate"/>
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="date" title="Last Modified" defaultValue={props.lastModifiedDate ? formatDate(props.lastModifiedDate) : ''} isDisabled={isProfileEditDisabled} feildName="lastModifiedDate"/>
        </Col>
        <Col sm="6" md="3">
          <CommonUserFormGroup type="date" title="Last Purchased" defaultValue={props.lastPurchaseDate ? formatDate(props.lastPurchaseDate) : ''} isDisabled={isProfileEditDisabled} feildName="lastPurchaseDate"/>
        </Col>


        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Preferred Contact Method" placeholder={props.preferredContactMethod} isDisabled={isProfileEditDisabled} feildName="preferredContactMethod"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Preferred Language" placeholder={props.preferredLanguage} isDisabled={isProfileEditDisabled} feildName="preferredLanguage"/>
        </Col>


        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Occupation" placeholder={props.occupation} isDisabled={isProfileEditDisabled} feildName="occupation"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Company" placeholder={props.company} isDisabled={isProfileEditDisabled} feildName="company"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Website" placeholder={props.website} isDisabled={isProfileEditDisabled} feildName="website"/>
        </Col>


        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Nationality" placeholder={props.nationality} isDisabled={isProfileEditDisabled} feildName="nationality"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Marital Status" placeholder={props.maritalStatus} isDisabled={isProfileEditDisabled} feildName="maritalStatus"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Spouse Name" placeholder={props.spouseName} isDisabled={isProfileEditDisabled} feildName="spouseName"/>
        </Col>


        <Col md="4">
          <FormGroup>
            <Label check>Children</Label>
            <Input type="select" className="rounded-2 btn-square" style={style} isDisabled={isProfileEditDisabled} name="childrenNames">
              <option value="">--Select--</option>
              {/* {props.childrenNames.split(',').map((child, index) => (
                <option key={index} value={child.trim()}>{child.trim()}</option>
              ))} */}
            </Input>
          </FormGroup>
        </Col>


        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Social Security Number" placeholder={props.socialSecurityNumber} isDisabled={isProfileEditDisabled} feildName="socialSecurityNumber"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Referral Source" placeholder={props.referralSource} isDisabled={isProfileEditDisabled} feildName="referralSource"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Membership Level" placeholder={props.membershipLevel} isDisabled={isProfileEditDisabled} feildName="membershipLevel"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Hobbies" placeholder={props.hobbies} isDisabled={isProfileEditDisabled} feildName="hobbies"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Newsletter Subscription" placeholder={props.subscribedToNewsletter ? "Yes" : "No"} isDisabled={isProfileEditDisabled} feildName="subscribedToNewsletter"/>
        </Col>
        <Col sm="6" md="4">
          <CommonUserFormGroup type="text" title="Education" placeholder={props.education} isDisabled={isProfileEditDisabled} feildName="education"/>
        </Col>
      </Row>
    </CardBody>
  );
};



