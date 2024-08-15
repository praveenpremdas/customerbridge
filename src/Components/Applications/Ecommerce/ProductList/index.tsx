import React, { useMemo, useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import axios from 'axios';
import { SearchTableButton } from "@/Constant";
import { ProductListTableData, ProductListTableDataColumn } from "@/Data/Application/Ecommerce";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { updatePagenationPageSize } from "@/Redux/Reducers/CustomerCommon";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredItems, setFilteredItems] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1); // Page number starts from 1
  const [pageSize, setPageSize] = useState(10); // Default page size
  const dispatch = useAppDispatch();
  const pagenationPageSize = useAppSelector((state) => state.customerCommon.pagenationPageSize);

  const fetch = useCallback(async (page: number, size: number) => {
    try {
      const response = await axios.get(`http://13.234.117.94:8080/api/customers?page=${page - 1}&size=${size}`);
      setFilteredItems(response.data.content);
      dispatch(updatePagenationPageSize(response.data.totalElements));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetch(currentPage, pageSize);
  }, [fetch, currentPage, pageSize, pagenationPageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset page to 1 on page size change
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <div className="list-product-header">
                <ProductListFilterHeader />
                <CollapseFilterData />
              </div>
              <div className="list-product">
                <div className="table-responsive">
                  <DataTable
                    className="theme-scrollbar"
                    data={filteredItems}
                    columns={ProductListTableDataColumn}
                    striped
                    highlightOnHover
                    pagination
                    paginationServer
                    paginationTotalRows={pagenationPageSize} // You may want to get the total count from the API
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    paginationPerPage={pageSize}
                    paginationRowsPerPageOptions={[10, 20, 30]} // Customize as needed
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListContainer;