"use client"

import { useState } from "react";
import { Col, FormGroup, Label, Row, Form, Button, Input } from "reactstrap";
import { ticketAxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from 'next/navigation'

const NewTicket: React.FC = () => {
  const [customerId, setCustomerId] = useState<number>(); // Default or editable as needed
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Create ticket with Axios
      const response = await ticketAxiosInstance.post("/tickets", {
        customerId,
        title,
        description
      });
      if (response.data) {
        router.push(`/ticket`);
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col sm="12">
          <FormGroup>
            <Label for="customerId">Customer ID</Label>
            <Input 
              type="number" 
              id="customerId" 
              value={customerId} 
              onChange={(e) => setCustomerId(Number(e.target.value))}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm="12">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm="12">
          <FormGroup>
            <Label for="description">Description</Label>
            <Input 
              type="textarea" 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <div className="d-flex justify-content-end">
            <Button type="submit" color="primary">Create Ticket</Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default NewTicket;