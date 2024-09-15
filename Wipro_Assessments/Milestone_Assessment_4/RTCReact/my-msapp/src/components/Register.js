import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', values);
            console.log(response.data);
            setSubmitting(false);
            navigate('/login');
        } catch (error) {
            console.error(error);
            setSubmitting(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <Field type="text" name="username" placeholder="Username" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
