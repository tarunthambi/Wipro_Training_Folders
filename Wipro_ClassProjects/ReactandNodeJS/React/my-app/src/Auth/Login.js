import React,{useState} from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function Login(){

   const [username,setUsername]=useState('');
   const [password,setPassword]=useState('');
   const navigate=useNavigate();

   const handleLogin=async (e) =>{
    e.preventDefault();
    try
    {
        const response=await axios.post('/login',{username,password});
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('username',username);

        navigate('/profile',{state:{token:response.data.token}});
    }
    catch(error){
        console.error('Error during login: ',error);
    }
   }


    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleLogin}>
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
                        <button type="submit">Login</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default Login;
