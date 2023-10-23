import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const EducationForm = ({ text }) => {

  return (
    <Formik
      initialValues={{ default: "True"}}

    >
        <Form>
            {text.text}
        </Form>
    </Formik>
  );
};

export default EducationForm;
