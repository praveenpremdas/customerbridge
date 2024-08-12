import { SearchTableButton } from "@/Constant";
import { ProductListTableData, ProductListTableDataColumn } from "@/Data/Application/Ecommerce";
import React, { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";
import axios from 'axios';


const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredItems, setfilteredItems] = useState([]);


  const fetch = async () => {
    const response = await axios.get('http://3.111.179.125:8080/api/customers?page=0&size=10');
    setfilteredItems(response.data.content);
    console.log(response,'response')
  }


  useEffect(() => {
    fetch();
  }, []);


  // const filteredItems = ProductListTableData.filter((item) => item.category && item.category.toLowerCase().includes(filterText.toLowerCase()));
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
                  <DataTable className="theme-scrollbar" data={filteredItems} columns={ProductListTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
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



