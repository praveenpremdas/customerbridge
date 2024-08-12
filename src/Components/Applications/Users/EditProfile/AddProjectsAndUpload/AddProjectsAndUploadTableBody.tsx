import React from "react";
import { Button, Input } from "reactstrap";
import { Delete, Edit, Href, Update } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { updateNestedField, Customer } from "@/Redux/Reducers/CustomerSclice";


// Define the type for the data items
interface DataItem {
  [key: string]: string | number; // Use index signature to handle dynamic keys
}


// Define the type for the component props
interface AddProjectsAndUploadTableBodyProps {
  props: {
    content: any,
    config: string
  } // The props could be an array of DataItem or undefined
}


const AddProjectsAndUploadTableBody: React.FC<AddProjectsAndUploadTableBodyProps> = ({ props }) => {
  const isProfileEditDisabled = useAppSelector((state) => state.profile.isProfileEditDisabled);
  const dispatch = useAppDispatch();


  const handleNestedChange = (path: string[], value: any) => {
    // Type assertion to match the expected type of path
    dispatch(updateNestedField({ path: path as (keyof Customer)[], value }));
  };


  return (
    <tbody>
      {props && props.content ? (
        props.content.map((data: any, index: number) => (
          <tr key={index}>
            {/* Generate <td> elements based on the data object's keys and values */}
            {Object.entries(data).map(([key, value], idx) => (
              <td key={idx}>
                <Input
                  type="text"
                  name={key}
                  defaultValue={value}
                  style={{ all: 'unset' }}
                  disabled={isProfileEditDisabled}
                  onChange={(e) => handleNestedChange([props.config, index.toString(), key], e.target.value)}
                />
              </td>
            ))}
            <td className="text-end">
              {/* Buttons can be uncommented and adjusted as needed */}
              {/* <Button color="primary" tag="a" size="sm" href={Href}>
                <i className="fa fa-pencil" /> {Edit}
              </Button>
              <Button color="transparent" tag="a" size="sm" href={Href}>
                <i className="fa fa-link" /> {Update}
              </Button>
              <Button color="danger" tag="a" size="sm" href={Href}>
                <i className="fa fa-trash" /> {Delete}
              </Button> */}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No data available</td>
        </tr>
      )}
    </tbody>
  );
};


export default AddProjectsAndUploadTableBody;



