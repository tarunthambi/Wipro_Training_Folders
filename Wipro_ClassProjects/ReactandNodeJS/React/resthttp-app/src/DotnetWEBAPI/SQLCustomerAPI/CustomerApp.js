import React,{useState,useEffect} from "react";
import '../Styles/styles.css';
import axios from 'axios';


const API_URL='http://localhost:5087/api/Customer';

function CustomerApp(){
    const [customers,setCustomers]=useState([]);
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [selectedCustomer,setSelectedCustomer]=useState(null);

    useEffect(()=>{
        axios.get(API_URL)
        .then(response=>response.data)
        .then(data=>{setCustomers(data);console.log(data)})
        .catch(error=>console.error("Error fetching customer details:",error))
    },[]); //Empty dependecny ensures that its only called on mount

    const createCustomer=()=>{
        axios.post(API_URL,{name,email,phoneNumber})
        .then(response=>response.data)
        .then(newCustomer=>setCustomers([...customers,newCustomer]))
        .catch(error=>console.error("Error creating customer:",error));
    };

    const updateCustomer=()=>{
        console.log('Id: ',selectedCustomer.id)
        console.log('Updated Data: ',{ id,name,email,phoneNumber})
        axios.put(`${API_URL}/${selectedCustomer.id}`,{name,email,phoneNumber},)
        .then(response=>response.data)
        .then(response=>{
            console.log(response.data);
            setCustomers(customers.map(c=>(c.id===response.data.id ? response.data:c)));
            setSelectedCustomer(null);
        })
    }
    const deleteCustomer=(id)=>{
        axios.delete(`${API_URL}/${id}`)
        .then(()=>setCustomers(customers.filter(c=>c.id !== id)))
        .catch(error=>console.error("Error deleting the customer: ",error));
    }

    return(
        <div>
            <h3 style={{color:'darkgoldenrod',textAlign:'center',fontWeight:'bold'}}>Customer details</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phoneNumber</th>
                        <th>Actions</th>
                    </tr>
                    {customers.map(c=>(
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phoneNumber}</td>
                            <td colSpan={2}>
                                <button onClick={()=>deleteCustomer(c.id)} className="btn btn-danger btn-sm">Delete</button>
                                <button onClick={()=>{setName(c.name);setEmail(c.email);setPhoneNumber(c.phoneNumber);setSelectedCustomer(c);}} className="btn btn-info btn-sm">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr/>
            <h6>{selectedCustomer ? 'Edit Customer':'Create Customer'}</h6>
            <table>
                <tbody>
                    <tr>
                        <td><input value={name} onChange={e=>setName(e.target.value)} placeholder="Customer Name"></input></td>
                    </tr>
                    <tr>
                        <td><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"></input></td>
                    </tr>
                    <tr>
                        <td><input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} placeholder="Phone Number"></input></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={selectedCustomer ? updateCustomer:createCustomer} className="btn btn-success btn-sm">
                                {selectedCustomer ? 'Update Customer':'Create Customer'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerApp;
