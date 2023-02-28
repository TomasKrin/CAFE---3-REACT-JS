import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/Formik/FormikInput";
import { useCreateJob } from "../../hooks/job";
import { NewJob } from "../../types/job";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  type: Yup.string().required("Required"),
  starting_from: Yup.string().required("Required"),
});

const AddJobForm = () => {
  const { mutateAsync: createJob } = useCreateJob();

  const handleSubmit = (values: NewJob) => {
    createJob(values)
      .then(() => {})
      .catch((error) => {
        console.error("failed to create user", error);
      });
  };

  const initialValues: NewJob = {
    title: "",
    description: "",
    price: 0,
    type: "fullTime",
    starting_from: "",
    has_drivers_license: false,
    user_id: 4,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>Add New Job</h1>
          <FormikInput type="text" name="title" placeholder="Title" />
          <FormikInput type="text" name="description" placeholder="Password" />
          <FormikInput type="password" name="confirmPassword" placeholder="Confirm Passsword" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddJobForm;
