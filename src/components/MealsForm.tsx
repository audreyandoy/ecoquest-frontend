import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; 

const MealForm = ({ onSubmit }) => {
    const validationSchema = Yup.object({
      dropdown: Yup.string().required("Dropdown is required")
    });
    
    const handleSubmit = async (values: { dropdown: string; }) => {
        try {
            const ecoMeals = {
                user: 1, // TODO: extract user id
                eco_breakfast: false,
                eco_lunch: false,
                eco_dinner: false,
            };

            if (values.dropdown === "option1") {
                ecoMeals.eco_breakfast = true;
            } else if (values.dropdown === "option2") {
                ecoMeals.eco_lunch = true;
            } else if (values.dropdown === "option3") {
                ecoMeals.eco_dinner = true;
            } 

            const response = await axios.post("http://127.0.0.1:8000/api/eco-meals", ecoMeals);

            console.log("Response:", response.data);

            onSubmit(response.data);
        } catch (e) {
            console.error("Error:", e);
        }
    };

    return (
        <Formik
          initialValues={{ dropdown: ""}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
        {({handleSubmit}) => (
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
        )}
        </Formik>

      );
    };
    
    export default MealForm;