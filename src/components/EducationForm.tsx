import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const EducationForm = ({ onSubmit }) => {

    const [text, setText] = useState("");

    const getEducationText = () => {
        axios.get(`http://127.0.0.1:8000/api/eco-education-text/1`).then((res) => {
            console.log(res.data);
            setText(res.data);
          });
    }

    // const handleSubmit = async () => {
    //     const response = await axios.post()
    // }

    useEffect(() => {
        getEducationText();
    }, []);

  return (
    <Formik
      initialValues={{ default: "True"}}
    //   validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {text.text}
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EducationForm;
