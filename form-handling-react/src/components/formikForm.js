import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => {
    return(
        <Formik
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
            console.log('Form submitted:', values);
            resetForm();

        }}
        >
            {({values, handleChange, handleBlur }) => (
                <Form>
                    <div>
                        <input 
                        type="text" 
                        name="username"
                        value={values.username} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <input
                        type="email" 
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} 
                        />
                    </div>
                    <div>
                        <input 
                        type="password" 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                         />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}


export default FormikForm;