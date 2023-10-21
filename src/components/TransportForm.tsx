import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TransportForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    dropdown: Yup.string().required("Dropdown is required"),
    distance: Yup.number()
      .typeError("Distance must be a number")
      .required("Distance is required"),
  });

  return (
    <Formik
      initialValues={{ dropdown: "", distance: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="dropdown">Dropdown:</label>
          <Field
            as="select"
            id="dropdown"
            name="dropdown"
            placeholder="Select option"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Walk</option>
            <option value="option2">Bike</option>
            <option value="option3">Bus</option>
          </Field>
          <ErrorMessage name="dropdown" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="distance">Distance:</label>
          <Field
            type="text"
            id="distance"
            name="distance"
            placeholder="Enter distance"
          />
          <ErrorMessage name="distance" component="div" className="error" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default TransportForm;
