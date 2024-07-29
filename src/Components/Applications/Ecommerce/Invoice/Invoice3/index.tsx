import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceThreeContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Container className="invoice-2">
        <div ref={componentRef}>
          <Card>
            <CardBody className="table-responsive theme-scrollbar">
              <div>
                <Table className="table-wrapper" borderless>
                  <tbody>
                    <tr>
                      <InvoiceThreeHeader />
                    </tr>
                    <tr>
                      <InvoiceClientDetail />
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}></span>
                      </td>
                    </tr>
                    <tr>
                      <InvoiceThreeTable />
                    </tr>
                    <tr>
                      <InvoiceBankTransfer />
                    </tr>
                    <tr>
                      <td>
                        <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 30 }} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default InvoiceThreeContainer;
