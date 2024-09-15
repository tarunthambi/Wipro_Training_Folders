import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../redux/menuSlice';
import { Link } from 'react-router-dom';
import '../Styles/MenuPage.css'; 

const MenuPage = () => {
    const dispatch = useDispatch();
    const menuItems = useSelector((state) => state.menu);
    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [dispatch]);

    return (
        <div className="menu-container">
            <h1 className="text-center my-4">Menu Items</h1>
            <div className="card-deck">
                {menuItems.map(item => (
                    <div key={item.itemID} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Price: ${item.price}</p>
                            <p className="card-text">Description: {item.description}</p>
                            <p className="card-text">Category: {item.category}</p>
                            <Link to={`/order`} className="btn btn-primary">Order Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
