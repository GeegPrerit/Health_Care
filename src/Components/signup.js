import React, { useState, useEffect } from 'react';
import Login from '../Components/login';
import axios from 'axios';

function Signup() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (username && useremail && password && role) {
      try {
        const response = await fetch('https://localhost:7037/api/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            useremail,
            password,
            role,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
          alert('User registered successfully!\n Contact admin to activate your account.');

  
          setUsername('');
          setEmail('');
          setPassword('');
          setRole('');
          setIsLoginMode(true); // Set login mode to true after successful registration

  
          //fetchUsers(); // Refresh the user list after successful signup
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleSwitchMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  if (isLoginMode) {
    return <Login />;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{isLoginMode ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={useremail}
            onChange={handleEmailChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role:
          </label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="form-select"
            required
          >
            <option value="">Select Role</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {isLoginMode ? 'Login' : 'Signup'}
          </button>
        </div>
        <div className="text-center mt-3">
          <button type="button" className="btn btn-link" onClick={handleSwitchMode}>
            {isLoginMode ? "Don't have an account? Signup" : 'Already have an account? Login'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
