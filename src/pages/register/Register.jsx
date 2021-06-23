import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  return (
    <div className="register">
      <h1>sign up</h1>
      <form className="registerForm">
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your preferred username"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your mail"
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        <button className="registerFormButton">register</button>
      </form>
      <Link to="/login" className="registerFormButton registerLoginButton">
        Login
      </Link>
    </div>
  );
}
