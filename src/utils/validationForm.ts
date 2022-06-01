import {FormikErrorType} from "components/userForm/types";
import {ValidationFormType} from "utils/types";

export const validationForm = (values: ValidationFormType, errors: FormikErrorType) => {
  if (!values.name) errors.name = 'Required';
  if (!values.username) errors.username = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.street) errors.street = 'Required';
  if (!values.city) errors.city = 'Required';
  if (!values.zipcode) errors.zipcode = 'Required';
  if (!values.phone) errors.phone = 'Required';
  if (!values.website) errors.website = 'Required';
}