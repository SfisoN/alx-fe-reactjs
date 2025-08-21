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
            {() => (
                <Form>
                    <div>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}


export default FormikForm;