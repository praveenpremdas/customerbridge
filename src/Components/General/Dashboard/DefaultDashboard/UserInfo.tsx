import { Card, CardBody, Col } from "reactstrap";
import { GoPremium, GoodDayLenaMiller } from "@/Constant";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

const UserInfo = () => {
  

  return (
    <Col xl="5" md="6" className="proorder-xl-1 proorder-md-1">
      <Card className="profile-greeting p-0">
        <CardBody>
          <div className="img-overlay">
            <h1 className="mt-0">{GoodDayLenaMiller}</h1>
            <p>Welcome to the Mofi family! We are delighted that you have visited our dashboard.</p>
            <Link className="btn" href={`/dashboard/default_dashboard`}>{GoPremium}</Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserInfo;
