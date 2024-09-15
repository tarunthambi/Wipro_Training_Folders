import React from "react";
import {Link, Outlet} from 'react-router-dom';

const Dashboard=()=>{
    return(
    <div>
        <h3>Dashboard</h3>
        <nav style={{display:'flex',listStyle:'none',padding:'15px',gap:'5px'}}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="statistics">Statistics</Link>
        </nav>
        <Outlet/> {/*This is where the nested routes will be rendered*/}
    </div>
    )
}

export default Dashboard;