import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <h1>sign up</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your preferred username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerFormButton">register</button>
      </form>
      <Link to="/login" className="registerFormButton registerLoginButton">
        Login
      </Link>

      {error && (
        <span
          style={{
            marginTop: '20px',
            color: '#c92103',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Something went wrong
        </span>
      )}
    </div>
  );
}
