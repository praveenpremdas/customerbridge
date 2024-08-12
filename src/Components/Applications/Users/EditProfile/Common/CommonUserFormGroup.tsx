import { CommonUserFormGroupType } from "@/Types/UserType";
import { FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { updateCustomerField, Customer } from "@/Redux/Reducers/CustomerSclice";


const CommonUserFormGroup :React.FC<CommonUserFormGroupType> = ({ type, title, placeholder, defaultValue, row, isDisabled, feildName }) => {


  const customerEdit = useAppSelector((state) => state.customer.customer);
  const dispatch = useAppDispatch();


  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateCustomerField({ field: name as keyof Customer, value }));
  };


  const style = {
    fontSize: 'small'
  };


  return (
    <FormGroup>
      <Label check>{title}</Label>
      <Input type={type} name={feildName} placeholder={placeholder} defaultValue={defaultValue} rows={row} autoComplete="" style={style} disabled={isDisabled} onChange={handleEdit}/>
    </FormGroup>
  );
};


export default CommonUserFormGroup;



