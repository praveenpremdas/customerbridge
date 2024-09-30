"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ticketAxiosInstance } from "@/utils/axiosInstance";

const SupportTicket = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent<any> | null>(null);
  const [ticketData, setTicketData] = useState<any>(null);

  // Fetch ticket data from the API
  const fetchTickets = async () => {
    try {
      const response = await ticketAxiosInstance.get('tickets/basic?page=0&size=10');
      console.log('ticketAxiosInstance', response);
      setTicketData(response.data);
    } catch (error) {
      console.log('Error fetching ticket data:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/SupportTicket")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  // Render MyAwesomeMap with ticketData as props if MyAwesomeMap is available
  return MyAwesomeMap ? <MyAwesomeMap ticketData={ticketData} /> : <div>Loading...</div>;
};

export default SupportTicket;