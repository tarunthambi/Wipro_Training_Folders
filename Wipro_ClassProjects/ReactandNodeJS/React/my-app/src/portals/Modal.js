import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({children}){
    //Create a portal that renders children into a DOM node with different id
    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') //The 'modal-root' is ouside of the main app structor
    )
}
export default Modal;