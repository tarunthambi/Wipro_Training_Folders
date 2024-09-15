import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="Login">
            <h2>Login</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object({
                    username: Yup.string().required('Required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        const response = await axios.post('http://localhost:5000/api/auth/login', values);
                        const token = response.data.token;
                        const username = values.username;

                        // Log username and token to the console
                        console.log('Username:', username);
                        console.log('Token:', token);

                        // Store token and username in localStorage
                        localStorage.setItem('token', token);
                        localStorage.setItem('username', username);

                        // Navigate to chat page
                        navigate('/chat');
                    } catch (error) {
                        if (error.response && error.response.data) {
                            setErrors({ submit: error.response.data.message || 'Login failed' });
                        } else {
                            setErrors({ submit: 'An unexpected error occurred' });
                        }
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" />
                            <ErrorMessage name="username" component="div" className="field-error" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="field-error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Login</button>
                        <ErrorMessage name="submit" component="div" className="form-error" />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
