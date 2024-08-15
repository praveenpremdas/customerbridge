import React from 'react';
import { Card, Col, Table } from 'reactstrap';
import AddProjectsAndUploadTableBody from './AddProjectsAndUploadTableBody';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { useAppSelector } from "@/Redux/Hooks";


// Define the type for the config object
interface Config {
  [key: string]: {
    tableHead: string[];
    buttons: string[];
  };
}


// Define the type for props
interface AddProjectsAndUploadProps {
  props: {
    title: string;
    content: any;
    config: string;
  }
}


// Define the config object with type
const config: Config = {
  contactNumbers: {
    tableHead: ['Type', 'Number'],
    buttons: ['edit'],
  },
  addresses: {
    tableHead: ['Type', 'Street', 'City', 'State', 'PostalCode','Country'],
    buttons: ['edit'],
  },
  preferences: {
    tableHead: ['Type', 'Value'],
    buttons: ['edit'],
  },
  socialMediaProfiles: {
    tableHead: ['Platform', 'ProfileUrl'],
    buttons: ['edit'],
  },
  tags: {
    tableHead: ['Name'],
    buttons: ['edit'],
  },
};


const AddProjectsAndUpload: React.FC<AddProjectsAndUploadProps> = ({ props }: any) => {
  // Check if the configKey exists in config and get tableHead
  const tableHead = config[props.config]?.tableHead ?? [];
 
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={props.title} />
        <div className="table-responsive theme-scrollbar">
          <Table className="card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                {tableHead.map((heading, index) => (
                  <th key={index} data-key={heading}>{heading}</th>
                ))}
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody props={{content: props.content, config: props.config}} />
          </Table>
        </div>
      </Card>
    </Col>
  );
};


export default AddProjectsAndUpload;