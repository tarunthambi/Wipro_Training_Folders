import React,{useState} from 'react';
import Modal from './Modal';

function ModalApp(){
    const [isModalOpen,setIsModalOpen]=useState(false);

    return(
        <div>
            <h1>Modal App</h1>
            <button className='btn btn-primary btn-md' onClick={()=>setIsModalOpen(true)}>Open Modal</button>

            {isModalOpen && (
                <Modal>
                    <h3>This is Modal</h3>
                    <p>This is modal content</p>
                    <button className="btn btn-warning btn-sm" onClick={()=>setIsModalOpen(false)}>Close Modal</button>
                </Modal>
            )}
        </div>
    )
}
export default ModalApp;