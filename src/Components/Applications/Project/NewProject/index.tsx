import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CreateNewProjectForm from "./CreateNewProjectForm";

const NewProjectContainer = ({ticketData}:any) => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <CreateNewProjectForm ticketData={ticketData}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewProjectContainer;
