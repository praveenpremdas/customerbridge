import { Cancel, Href, PrintInvoice } from "@/Constant";
import { InvoicePrintType } from "@/Types/EcommerceType";
import Link from "next/link";
import React from "react";

export const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {
  

  return (
    <span style={{display: "flex",justifyContent: "center",gap: 15,}} className="pb-5">
      <Link onClick={handlePrint} style={{background: "rgba(122, 112, 186, 1)",color: "rgba(255, 255, 255, 1)",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} href={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10,}}/>
      </Link>
      <Link style={{background: "rgba(122, 112, 186, 0.1)",color: "rgba(122, 112, 186, 1)",borderRadius: 10,padding: "18px 12px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} href={`/ecommerce/product`} download>
        {Cancel}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10,}}/>
      </Link>
    </span>
  );
};