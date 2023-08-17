import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function LoginPage({setLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (email === 'abc@example.com' && password === 'password') {
      setLoggedIn(true);
      navigate('/Shop')
    } else {
        alert("Wrong login credentials")
      navigate('/');
    }
  };

  return (
    <div className='login-page'>
      <h2>Login Page</h2>
      <div>
        <label className='mt-3'>Email:  </label>
        <input type="email" value={email} onChange={handleEmailChange} style={{marginLeft:"28px"}} />
      </div>
      <div>
        <label className='mt-3'>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button className='mt-3 loginButton'onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default LoginPage;
