import React, { useState } from 'react';
import InputField from './TASK_2_InpField'; 

const LoginForm = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        inputType="Password"
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        label="Password"
        showToggle={true}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
