import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // New state for the message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.id === id)) {
      setMessage('ID already exists');
      return;
    }

   
    users.push({ id, password });
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Signup successful, please login.');
    setTimeout(() => {
      navigate('/login');
    }, 2000); 
  };

  return (
    <div className="container mt-5" style={{ backgroundColor:'#ddd',color:'darkred', width: '350px', margin: '0 auto' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="signupId" className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="signupId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="signupConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn5 btn-primary">Signup</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>} {}
    </div>
  );
}

export default Signup;
