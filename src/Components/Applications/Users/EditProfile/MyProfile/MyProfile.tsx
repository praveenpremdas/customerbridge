import { Button, Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import { Bio, MyProfiles, Save } from "@/Constant";
import { UserFormHead } from "./UserFormHead";
import CommonUserFormGroup from "../Common/CommonUserFormGroup";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { useAppSelector } from "@/Redux/Hooks";


const MyProfile = ({props}: any) => {
  const isProfileEditDisabled = useAppSelector((state) => state.profile.isProfileEditDisabled);


  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={MyProfiles} />
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()}>
            <UserFormHead props={props}/>
            {/* <FormGroup>
              <h6 className="form-label">{Bio}</h6>
              <Input type="textarea" rows={5} defaultValue={BioText} />
            </FormGroup> */}            
            <CommonUserFormGroup type="text" title="Customer Id" placeholder={props.id} isDisabled={true} feildName="id"/>
            <CommonUserFormGroup type="text" title="First Name" placeholder={props.firstName} isDisabled={isProfileEditDisabled} feildName="firstName"/>
            <CommonUserFormGroup type="text" title="Last Name" placeholder={props.lastName} isDisabled={isProfileEditDisabled} feildName="lastName"/>
            <CommonUserFormGroup type="email" title="Email Address" placeholder={props.email} isDisabled={isProfileEditDisabled} feildName="email"/>
            <CommonUserFormGroup type="number" title="Phone Number" placeholder={props.phoneNumber} isDisabled={isProfileEditDisabled} feildName="phoneNumber"/>
            {/* <div className="form-footer pt-2.5 pb-4">
              <Button block color="primary">Edit</Button>
            </div> */}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};


export default MyProfile;



