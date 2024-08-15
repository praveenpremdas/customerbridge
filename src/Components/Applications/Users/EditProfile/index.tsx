import React from "react";
import { Container, Row, Button } from "reactstrap";
import MyProfile from "./MyProfile/MyProfile";
import EditProfileForm from "./EditProfiles/EditProfileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { toggleEditState } from "@/Redux/Reducers/ProfileSlice";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const EditProfileContainer: React.FC<{ props: any }> = ({ props }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname()
  const router = useRouter()
  const isAddCustomer = pathname && pathname.indexOf('addcustomer') > -1 ? true : false;
  const isProfileEditDisabled = useAppSelector((state) => state.profile.isProfileEditDisabled);
  const editCustomer = useAppSelector((state) => state.customer.customer);


  // Toggle disabled state on button click
  const handleEditAndCancel = () => {
    if (isAddCustomer) {
      router.push('/customers')
    } else {
      dispatch(toggleEditState());
    }
  };


  const profileEditSave = async () => {
    if (isAddCustomer) {
      // endponit to create customer
      console.log(editCustomer)
      const response = await axios.post('http://13.234.117.94:8080/api/customers', {...editCustomer});
      console.log(response)
      if (response.status == 201 && response.data && response.data.id) {
        router.push('/customers')
      } else {
        alert('error')
      }
    } else {
      // endponit to edit customer
      try {
        const response = await axios.put('http://13.234.117.94:8080/api/customers/' + props.id, {...editCustomer});
        if (response.status == 200 && response.data && response.data.id) {
          dispatch(toggleEditState());
        } else {
          alert('error')
        }
      } catch (error) {
        console.log(error,'error')
      }
    }
  };


  return (
    <Container fluid>
      <div className="edit-profile">
        <Row className={`mb-3 ${isProfileEditDisabled ? '' : 'd-none'}`}>
          <div className="d-flex justify-content-end w-100">
            <Button
              color="primary"
              size="sm"
              className="mb-3 mt-2"
              onClick={handleEditAndCancel}
              style={{ width: '120px', height: '50px' }}
            >
              <i className="fa fa-pencil" /> Edit
            </Button>
          </div>
        </Row>
        <Row className="mb-3">
          <div className={`d-flex justify-content-end w-100 ${isProfileEditDisabled ? 'd-none' : ''}`}>
            <Button
              color="primary"
              size="sm"
              className="mb-3 mt-2 me-5"
              onClick={profileEditSave}
              style={{ width: '120px', height: '50px' }}
            >
              <i className="icon-save-alt mx-1" /> Save
            </Button>
            <Button
              color="danger"
              size="sm"
              className="mb-3 mt-2"
              onClick={handleEditAndCancel}
              style={{ width: '120px', height: '50px' }}
            >
              <i className="fa fa-pencil" /> Cancel
            </Button>
          </div>
        </Row>
        <Row>
          <MyProfile props={props} />
          <EditProfileForm props={props} />
          <AddProjectsAndUpload
            props={{ title: 'Contact Numbers', content: props.contactNumbers, config: 'contactNumbers' }}
          />
          <AddProjectsAndUpload
            props={{ title: 'Addresses', content: props.addresses, config: 'addresses' }}
          />
          <AddProjectsAndUpload
            props={{ title: 'Preferences', content: props.preferences, config: 'preferences' }}
          />
          <AddProjectsAndUpload
            props={{ title: 'SocialMediaProfiles', content: props.socialMediaProfiles, config: 'socialMediaProfiles' }}
          />
          <AddProjectsAndUpload
            props={{ title: 'tags', content: props.tags, config: 'tags' }}
          />
        </Row>
      </div>
    </Container>
  );
};


export default EditProfileContainer;