"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const AssignTicket = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/SupportTicket")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <><h1>assign</h1><MyAwesomeMap /></> : "";
};

export default AssignTicket;
