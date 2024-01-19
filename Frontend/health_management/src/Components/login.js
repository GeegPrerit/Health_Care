import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleMode = () => {
    setIsSignup(!isSignup);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inpobj = {
        userName: username,
        password: password,
      };
      let inputobj = { username: username, password: password };
      fetch('https://localhost:7037/api/Token', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inpobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            setError('Invalid credentials');
          } else {
            localStorage.setItem('username', username);
            localStorage.setItem('jwttoken', resp.token);
            console.log(resp.token);
            const decodedToken = jwt_decode(resp.token);
            console.log(decodedToken);
            const role =
              decodedToken[
                'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
              ];
            console.log(role);
            if (role === 'Patient') {
              alert('Patient Logged In');
              navigate('/Patient');
            } else if (role === 'Doctor') {
              //const doctorId = decodedToken.sub;
              alert('Doctor Logged In');
              navigate('/Doctor');
            } else {
              alert('Admin Logged In');
              navigate('/Admin');
            }
          }
        })
        .catch((err) => {
          setError('Invalid Credentials \nPlease Check Username and Password');
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
    }
    if (password === '' || password === null) {
      result = false;
    }
    return result;
  };

  useEffect(() => {
    // Check if user is already logged in
    const token = sessionStorage.getItem('jwttoken');
    if (token) {
      const decodedToken = jwt_decode(token);
      const role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
      if (role === 'Patient') {
        navigate('/Patient');
      } else if (role === 'Doctor') {
        navigate('/Doctor');
      } else {
        navigate('/Admin');
      }
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">{isSignup ? 'Signup' : 'Login'}</h1>
      {error && <p className="text-center text-danger">{error}</p>}
      <form onSubmit={proceedLoginUsingAPI}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
            <div
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {isSignup ? 'SignUp' : 'Login'}
          </button>
        </div>
        <div className="text-center mt-3">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <Link
                to="/login"
                className="link-button"
                onClick={handleToggleMode}
              >
                Click here to login
              </Link>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <Link to="/SignUp" onClick={handleToggleMode}>
                Click here to signup
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
