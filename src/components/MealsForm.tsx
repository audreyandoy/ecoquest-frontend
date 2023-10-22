import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MealForm = ({ onSubmit }) => {
    const validationSchema = Yup.object({
      dropdown: Yup.string().required("Dropdown is required")
    });
  
    return (
        <Formik
          initialValues={{ dropdown: ""}}
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
                <option value="option1">Breakfast</option>
                <option value="option2">Lunch</option>
                <option value="option3">Dinner</option>
              </Field>
              <ErrorMessage name="dropdown" component="div" className="error" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      );
    };
    
    export default MealForm;