import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i class="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="topListItem">
            HOME
          </Link>
          <Link to="/" className="topListItem">
            ABOUT
          </Link>
          <Link to="/" className="topListItem">
            CONTACT
          </Link>
          <Link to="/write" className="topListItem">
            WRITE
          </Link>
          {user && (
            <Link to="" className="topListItem">
              LOGOUT
            </Link>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://picsum.photos/200/300?grayscale"
            alt="profile greyscale"
          />
        ) : (
          <ul className="topList">
            <Link to="/login" className="topListItem">
              Login
            </Link>

            <Link to="/register" className="topListItem">
              Register
            </Link>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
