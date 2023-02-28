import { Field, ErrorMessage } from "formik";
import Input from "./Input";

type FormikInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

const FormikInput = ({ name, ...rest }: FormikInputProps) => {
  return (
    <>
      <Field name={name} as={Input} {...rest}></Field>
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </>
  );
};

export default FormikInput;
