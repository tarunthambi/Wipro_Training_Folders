import React from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ReviewPages.css';

const ReviewPages = () => {
    const location = useLocation();
    const { itemID, customerID } = location.state || {}; 

    const handleSubmit = async (values) => {
        try {
            const token = localStorage.getItem('jwtToken');
            if (!itemID || !customerID) {
                throw new Error('ItemID or CustomerID is missing');
            }

            const reviewData = {
                ...values,
                itemID: parseInt(itemID, 10),
                customerID: parseInt(customerID, 10)
            };

            await axios.post('http://localhost:5256/api/Review', reviewData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success('Review sent successfully');
        } catch (error) {
            toast.error('Error submitting review');
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Give Your Review</h1>
            <Formik
                initialValues={{ rating: '', comment: '' }}
                validationSchema={Yup.object({
                    rating: Yup.number()
                        .required('Required')
                        .min(1, 'Rating must be between 1 and 5')
                        .max(5, 'Rating must be between 1 and 5'),
                    comment: Yup.string()
                        .required('Required')
                        .min(10, 'Comment must be at least 10 characters')
                })}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="form-group mb-4">
                        <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                        <Field name="rating" type="number" className="form-control" min="1" max="5" />
                        <ErrorMessage name="rating" component="div" className="text-danger mt-2" />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="comment" className="form-label">Comment</label>
                        <Field name="comment" as="textarea" className="form-control" rows="4" />
                        <ErrorMessage name="comment" component="div" className="text-danger mt-2" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Review</button>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    );
};

export default ReviewPages;
