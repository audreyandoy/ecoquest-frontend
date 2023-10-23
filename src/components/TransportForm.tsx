import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";

const TransportForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    distance: Yup.number()
      .typeError("Distance must be a number")
      .required("Distance is required"),
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (
    values: { activity: string; distance: string },
    actions: FormikHelpers<{ activity: string; distance: string }>
  ) => {
    setSubmitting(true);
    try {
      const requestData = {
        activity: values.activity,
        distance: parseFloat(values.distance),
        user: 1,
      };
      console.log(requestData);

      await axios.post(`http://127.0.0.1:8000/api/eco-transport`, requestData);
      onSubmit();

      actions.resetForm();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ dropdown: "", distance: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <Form>
        <div>
          <label htmlFor="dropdown">Dropdown:</label>
          <Field
            as="select"
            id="activity"
            name="activity"
            placeholder="Select option"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Walk">Walk</option>
            <option value="Bike">Bike</option>
            <option value="Bus">Bus</option>
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
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default TransportForm;
