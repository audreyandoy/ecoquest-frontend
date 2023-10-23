import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EducationForm = ({ onSubmit, chatGPTText }) => {
//   const validationSchema = Yup.object({
    
//     distance: Yup.number()
//       .typeError("Distance must be a number")
//       .required("Distance is required"),
//   });

  return (
    <Formik
      initialValues={{ default: "True"}}
    //   validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {chatGPTText}
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EducationForm;
