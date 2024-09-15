import React,{useState} from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function Register(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleRegister=async (e)=>{
        e.preventDefault();
        try{
            await axios.post('/register',{username,password});
            alert('Registration Successfull');
            navigate('/');
        }
        catch(error){
            console.error('Error during registration: ',error);
        }
    }

    return(
        <div>
            <h1>Register Form</h1>
            <form onSubmit={handleRegister}>
            <table cellPadding={5} cellSpacing={5}>
                <tbody>
                <tr>
                    <td>
                        <label>UserName: </label>
                    </td>
                    <td>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                <td>
                        <label>Password: </label>
                    </td>
                    <td>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit">Register</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default Register;
