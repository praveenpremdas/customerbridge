"use client";

import React, { useState, useEffect } from "react";
import { ticketAxiosInstance } from "@/utils/axiosInstance"; // Import your Axios instance
import NewProjectContainer from "@/Components/Applications/Project/NewProject";

interface NewTicketProps {
  params: {
    ticketId: string;
  };
}

const NewTicket: React.FC<NewTicketProps> = ({ params }) => {
  const [ticketData, setTicketData] = useState<any>(null); // State to store ticket data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading state
  const [error, setError] = useState<string | null>(null); // State to handle errors

  const { ticketId } = params;

  const fetchTicket = async () => {
    try {
      const response = await ticketAxiosInstance.get(`/tickets/${ticketId}`);
      const data = response.data;
      setTicketData(data); // Update state with response data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError("Failed to fetch ticket data."); // Handle error
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  useEffect(() => {
    if (ticketId) {
      fetchTicket(); // Call the function to fetch data when component mounts
    }
  }, [ticketId]);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return <NewProjectContainer ticketData={ticketData} />; // Pass data to child component
};

export default NewTicket;
