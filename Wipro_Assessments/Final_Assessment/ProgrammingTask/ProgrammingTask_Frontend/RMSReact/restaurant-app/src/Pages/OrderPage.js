import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/OrderPage.css'; // Import custom CSS

const OrderPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate(); // Initialize navigate

    // Fetch menu items from API
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:5195/api/Menu');
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
                toast.error('Error fetching menu items');
            }
        };
        fetchMenuItems();
    }, []);

    // Handle form submission
    const handleSubmit = async (values) => {
        try {
            const token = localStorage.getItem('jwtToken');

            // Convert itemIDs to numbers if they are not already
            const selectedItemIDs = values.itemIDs.map(id => parseInt(id, 10));

            // Filter out any invalid item IDs
            const orderItems = selectedItemIDs
                .map(itemID => menuItems.find(item => item.itemID === itemID))
                .filter(item => item !== undefined); // Remove undefined items

            if (orderItems.length === 0) {
                throw new Error('No valid items selected');
            }

            // Calculate total amount
            const totalAmount = orderItems.reduce((sum, item) => sum + item.price, 0);

            const orderData = {
                customerID: 1, // Replace with actual customer ID if needed
                itemIDs: selectedItemIDs,
                totalAmount,
                orderStatus: 'Booked'
            };

            await axios.post('http://localhost:5270/api/Order', orderData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success('Order placed successfully');
            navigate('/reviewpage', { state: { itemID: selectedItemIDs[0], customerID: orderData.customerID } });
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('Error placing order');
        }
    };

    return (
        <div className="container my-4">
            <h1 className="mb-4">Place Your Order</h1>
            <Formik
                initialValues={{ itemIDs: [] }}
                validationSchema={Yup.object({
                    itemIDs: Yup.array().min(1, 'At least one item must be selected')
                })}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="itemIDs" className="form-label">Menu Items</label>
                            <Field
                                name="itemIDs"
                                as="select"
                                multiple
                                className="form-select"
                                onChange={e => {
                                    const selectedOptions = Array.from(e.target.options)
                                        .filter(option => option.selected)
                                        .map(option => option.value);

                                    setFieldValue("itemIDs", selectedOptions);
                                    setSelectedItems(menuItems.filter(item => selectedOptions.includes(item.itemID.toString())));
                                }}
                            >
                                {menuItems.map(item => (
                                    <option key={item.itemID} value={item.itemID}>
                                        {item.name} - ${item.price.toFixed(2)}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="itemIDs" component="div" className="text-danger mt-2" />
                        </div>

                        {selectedItems.length > 0 && (
                            <div className="mt-4">
                                <h4>Selected Items</h4>
                                <ul className="list-group">
                                    {selectedItems.map(item => (
                                        <li key={item.itemID} className="list-group-item">
                                            <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary mt-3">Submit Order</button>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </div>
    );
};

export default OrderPage;
