// Footer Component
import React from "react";

const Footer=()=>{
    return(
        <footer style={footerStyle}>
            <p>&copy; 2024 SwizzwooD. All rights reserved.</p>
        </footer>
    )
}

const footerStyle={
    textAlign:'center',
    backgroundColor:'#2F3C7E',
    color:'white',
    position:'fixed',
    bottom:'0',
    width:'100%'
}

export default Footer;