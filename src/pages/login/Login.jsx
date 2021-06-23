import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your mail"
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
        />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginButton registerButton">
        <Link to="/register" className="registerButton">
          Register
        </Link>
      </button>
    </div>
  );
}
