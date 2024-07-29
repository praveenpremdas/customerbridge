"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const AddPost = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof navigator !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/Blog/AddPost")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default AddPost;
