import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.id === id && user.password === password);

    if (user) {
      onLogin();
      navigate('/');
    } else {
      setMessage('Invalid ID or password');
    }
  };

  return (
    <div style={{ backgroundColor:'#ddd',color:'darkred', width: '350px', margin: '0 auto' }} className="container col-md-4 mt-5 text-center">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginId" className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="loginId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn5 btn-primary">Login</button>
      </form>
      {message && <div className="mt-3 alert alert-danger">{message}</div>} {}
    </div>
  );
}

export default Login;
