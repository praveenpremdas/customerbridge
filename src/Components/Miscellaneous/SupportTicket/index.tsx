import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SupportTicketList } from "@/Constant";
import { SupportData } from "@/Data/Miscellaneous/SupportTicket";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";

interface SupportTicketContainerProps {
  ticketData: any;
}

const SupportTicketContainer: React.FC<SupportTicketContainerProps> = ({ ticketData }) => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={SupportTicketList} span={SupportData} headClass="card-no-border pb-0" />
            <CardBody>
              {/* Pass ticketData to TicketList and TicketTable as props */}
              <TicketList ticketData={ticketData} />
              <TicketTable ticketData={ticketData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
