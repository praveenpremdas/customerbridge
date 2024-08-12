import { Designer, ImagePath } from "@/Constant";
import { Row } from "reactstrap";


export const UserFormHead = ({props}: any) => {
  return (
    <Row className="mb-2">
      <div className="profile-title">
        <div className="d-flex">
          <img className="img-70 rounded-circle" alt="" src={props.profilePictureUrl} />
          <div className="flex-grow-1">
            <h4 className="mb-1 text-uppercase">{props.firstName + " " + props.lastName}</h4>
            {/* <p>{Designer}</p> */}
          </div>
        </div>
      </div>
    </Row>
  );
};



