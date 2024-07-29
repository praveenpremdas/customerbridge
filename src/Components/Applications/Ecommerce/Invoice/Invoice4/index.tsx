import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceFourContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Container className="invoice-2">
        <div ref={componentRef}>
          <Card>
            <CardBody>
              <Table className="table-wrapper table-responsive theme-scrollbar" borderless>
                <tbody>
                  <tr>
                    <InvoiceFourHeader />
                  </tr>
                  <tr>
                    <InvoiceFourDetail />
                  </tr>
                  <tr>
                    <InvoiceFourTable />
                  </tr>
                  <tr style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #7A70BA 20.61%, #0DA759 103.6%)", display: "block", marginTop: 6 }} />
                  <tr>
                    <InvoiceTotal />
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default InvoiceFourContainer;
