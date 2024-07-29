'use client'
import React, { FunctionComponent, useEffect, useState } from "react";

const AddProduct = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof navigator !== "undefined") {
        const newClient = (await import("@/Components/Applications/Ecommerce/AddProduct")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default AddProduct;
