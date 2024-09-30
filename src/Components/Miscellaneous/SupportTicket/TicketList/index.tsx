import { Row, Col, Card, CardBody } from "reactstrap";
import CountUp from "react-countup";
import ProfitAndLoss from "./ProfitAndLoss";
// import { TicketData } from "@/Data/Miscellaneous/SupportTicket";

const TicketList = ({ ticketData }: any) => {

  const TicketData = [
    {
      id: 1,
      title: "Open",
      num: ticketData?.open,
      class: "bg-primary",
    },
    {
      id: 2,
      title: "In Progress",
      num: ticketData?.inProgress,
      class: "bg-secondary",
    },
    {
      id: 3,
      title: "Closed",
      num: ticketData?.closed,
      class: "bg-warning",
    }
  ];

  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl="4" md="6" className="box-col-4" key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} className="text-dark mb-1" delay={1} />
                  </h3>
                </Col>
                {/* <ProfitAndLoss /> */}
              </Row>
              <div className="progress-showcase mt-3">
                <div className="progress sm-progress-bar">
                  <div className={`progress-bar ${item.class}`} style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
