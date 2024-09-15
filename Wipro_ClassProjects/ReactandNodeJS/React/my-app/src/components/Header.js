//Header Component
import './Header.css';
// import React from "react";
import React, { useEffect } from "react";

const Header = () =>{
    return(
        <header>
            <div id='d1'>
                <h2>SwizzwooD.</h2>
            </div>
            {/* <div id="marquee-container">
                <h2><marquee>Welcome to SwizzwooD Interiors...</marquee></h2>
            </div> */}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="aboutus">About Us</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a id='signbut'href="signup">Signup</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;