import { Field } from "formik";
import { Col, FormGroup, Label, Row, Form, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ticketAxiosInstance, crmAxiosInstance } from "@/utils/axiosInstance"
import axios from 'axios';

interface DateSectionProps {
  ticketData?: any; // Define the type according to your data structure
}

interface Agent {
  id: number;
  name: string;
}

export const DateSection: React.FC<DateSectionProps> = ({ ticketData }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>(ticketData?.status || "OPEN");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isAssigning, setIsAssigning] = useState<boolean>(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(ticketData?.agent || null);

  useEffect(() => {
    if (ticketData) {
      // Initialize startDate and endDate with values from ticketData if available
      const { createdAt, updatedAt } = ticketData;
      if (createdAt) setStartDate(new Date(...createdAt)); // Convert createdAt array to Date
      if (updatedAt) setEndDate(new Date(...updatedAt)); // Convert updatedAt array to Date
      setStatus(ticketData.status || "OPEN");
      setSelectedAgent(ticketData.agent || null); // Update selected agent if available
    }
  }, [ticketData]);

  useEffect(() => {
    // Fetch agents when component mounts
    const fetchAgents = async () => {
      try {
        const response = await crmAxiosInstance.get("agents?");
        if (response.data.status === "Success") {
          setAgents(response.data.data);
        } else {
          console.error("Failed to fetch agents:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleStatusChange = async (newStatus: string) => {
    try {
      // Update status with Axios
      const response = await ticketAxiosInstance.put(`/tickets/1/status`, { status: newStatus });
      console.log(response);
      // Update the status in state with the response
      setStatus(response.data.status);
      setIsEditing(false); // Close the dropdown after updating
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleAssignAgent = async (agent: Agent) => {
    try {
      // Update ticket with the selected agent
      const response = await ticketAxiosInstance.put(`/tickets/1/assign`, { agentId: agent.id });
      console.log(response);
      setSelectedAgent(agent); // Update the selected agent in state
      setIsAssigning(false); // Close the dropdown after assigning
    } catch (error) {
      console.error("Error assigning agent:", error);
    }
  };

  return (
    <Form>
      <Row className="mb-3">
        <Col sm="12">
          <div className="d-flex justify-content-end">
            <Button color="primary" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Update Status"}
            </Button>
            <Button color="secondary" onClick={() => setIsAssigning(!isAssigning)} className="ms-2">
              {selectedAgent ? "Re-Assign Ticket" : "Assign Ticket"}
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="4">
          <FormGroup>
            <Label check>Status</Label>
            {isEditing ? (
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                  {status}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleStatusChange("OPEN")}>OPEN</DropdownItem>
                  <DropdownItem onClick={() => handleStatusChange("CLOSED")}>CLOSED</DropdownItem>
                  <DropdownItem onClick={() => handleStatusChange("IN_PROGRESS")}>IN_PROGRESS</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <FormGroup>
                <Label>{status || "No Status"}</Label>
              </FormGroup>
            )}
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup className="d-flex flex-column align-items-stretch">
            <Label check>Created At</Label>
            <DatePicker 
              className="datepicker-here form-control" 
              selected={startDate} 
              onChange={(date: Date) => setStartDate(date)} 
              dateFormat="yyyy/MM/dd"
            />
            <FormGroup>
              <Label>{ticketData?.createdAt ? `Created At: ${startDate.toLocaleDateString()}` : "No Created Date"}</Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup className="d-flex flex-column align-items-stretch">
            <Label check>Updated At</Label>
            <DatePicker 
              className="datepicker-here form-control" 
              selected={endDate} 
              onChange={(date: Date) => setEndDate(date)} 
              dateFormat="yyyy/MM/dd"
            />
            <FormGroup>
              <Label>{ticketData?.updatedAt ? `Updated At: ${endDate.toLocaleDateString()}` : "No Updated Date"}</Label>
            </FormGroup>
          </FormGroup>
        </Col>
      </Row>

      {/* Display other ticket fields */}
      <Row>
        <Col sm="6">
          <FormGroup>
            <h4>Title</h4>
            <p>{ticketData?.title || "No Title"}</p>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <h4>Description</h4>
            <p>{ticketData?.description || "No Description"}</p>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <FormGroup>
            <h4>Agent Name</h4>
            <p>{selectedAgent?.name || "No Agent Assigned"}</p>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <h4>Customer Full Name</h4>
            <p>{ticketData?.customer?.fullName || "No Customer"}</p>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <FormGroup>
            <h4>Customer Email</h4>
            <p>{ticketData?.customer?.email || "No Email"}</p>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <h4>Customer Phone Number</h4>
            <p>{ticketData?.customer?.phoneNumber || "No Phone Number"}</p>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <FormGroup>
            <h4>Customer Company</h4>
            <p>{ticketData?.customer?.company || "No Company"}</p>
          </FormGroup>
        </Col>
      </Row>

      {/* Assign Agent Dropdown */}
      {isAssigning && (
        <Row>
          <Col sm="12">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>
                {selectedAgent ? selectedAgent.name : "Select Agent"}
              </DropdownToggle>
              <DropdownMenu>
                {agents.map(agent => (
                  <DropdownItem key={agent.id} onClick={() => handleAssignAgent(agent)}>
                    {agent.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      )}
    </Form>
  );
};
