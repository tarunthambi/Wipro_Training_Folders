import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/ProfilePage.css';

const ProfilePage = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await axios.get('http://localhost:5270/api/Order', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
                toast.error('Error fetching orders');
            }
        };
        fetchOrders();
    }, []);

    const handleDelete = async (orderID) => {
        try {
            const token = localStorage.getItem('jwtToken');
            await axios.delete(`http://localhost:5270/api/Order/${orderID}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setOrders(orders.filter(order => order.orderID !== orderID));
            toast.success('Order deleted successfully');
        } catch (error) {
            console.error('Error deleting order:', error);
            toast.error('Error deleting order');
        }
    };

    return (
        <div className="container">
            <h1 className="my-4">Your Ordered Items</h1>
            {orders.length > 0 ? (
                <ul className="list-group">
                    {orders.map(order => (
                        <li key={order.orderID} className="list-group-item">
                            <h5>Order ID: {order.orderID}</h5>
                            <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                            <p><strong>Status:</strong> {order.orderStatus}</p>
                            <p><strong>Items:</strong></p>
                            <ul>
                                {order.itemIDs.map(itemID => (
                                    <li key={itemID}>Item ID: {itemID}</li>
                                ))}
                            </ul>
                            <button 
                                className="btn btn-danger mt-2" 
                                onClick={() => handleDelete(order.orderID)}
                            >
                                Delete Order
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default ProfilePage;
