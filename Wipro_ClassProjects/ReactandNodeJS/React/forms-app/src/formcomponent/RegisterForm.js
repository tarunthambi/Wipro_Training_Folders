import React from 'react';
import {ErrorMessage, Field, Formik,Form} from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm =()=>{
    const initialValues={
        username:'',
        email:'',
        password:'',
    };

    const validationSchema=Yup.object({
        username:Yup.string().required("Username is required")
        .min(5,"Min length of username must be 5")
        .max(10,"Max length of username must be 10")
        .matches(/^[a-zA-Z0-9]*$/,"Username can contain only characters and numbers"),

        email:Yup.string().email("Invalid Email Address")
        .required("Email is required"),

        password:Yup.string().min(6,"Password must be altleast 6 characters")
        .required("Password is required")
        .max(15,"Password can be maximum 15 characters")   
        .matches(/^(?=.*[A-Z])^(?=.*[a-z])(?=.*\d)(?=.[!@#$*])[A-Za-z\d!@#$*]{6,15}$/,
            "Password must be atleast 6 characters long, contains one uppercase, one lowercase,one number and one special character")     
    });

    const onSubmit=(values)=>{
        console.log('Form Data: ',values);
    }

    return(
        <div>
            <h2 style={{color:'darkgoldenrod'}}>Register Form</h2>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header text-center bg-info'>
                                <h4>Register</h4>
                            </div>
                            <div className='card-body'>
                                <Formik initialValues={initialValues} validationSchema={validationSchema}
                                onSubmit={onSubmit}>
                                {()=>(
                                    <Form>
                                        <div className='mb-3'>
                                            <label htmlFor='username' className='form-label'>Username</label>
                                            <Field type="text" id="username" name="username" className="form-control"/>
                                            <ErrorMessage name="username" component="div" className='text-danger'/>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='email' className='form-label'>Email</label>
                                            <Field type="email" id="email" name="email" className="form-control"/>
                                            <ErrorMessage name="email" component="div" className='text-danger'/>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='password' className='form-label'>Password</label>
                                            <Field type="password" id="password" name="password" className="form-control"/>
                                            <ErrorMessage name="password" component="div" className='text-danger'/>
                                        </div>
                                        <div className='text-center'>
                                            <button type="submit" className='btn btn-primary'>Register</button>
                                        </div>
                                    </Form>
                                )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
  