// Contact.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles/Contact.css';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must be at least 4 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email format')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
        .required('Required'),
      subject: Yup.string()
        .max(50, 'Must be 50 characters or less'),
      message: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert('Your form is submitted');
      // alert(JSON.stringify(values, null, 2));
      console.log('Form Values:', values);
    },
  });
  

  return (
    <div className="container mt-5 contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="mb-3 form-group">
          <label htmlFor="name" className="form-label contact-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control contact-input ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label contact-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control contact-input ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="subject" className="form-label contact-label">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className={`form-control contact-input ${formik.touched.subject && formik.errors.subject ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="invalid-feedback">{formik.errors.subject}</div>
          ) : null}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="message" className="form-label contact-label">Message</label>
          <textarea
            id="message"
            name="message"
            className={`form-control contact-input contact-textarea ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="invalid-feedback">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
