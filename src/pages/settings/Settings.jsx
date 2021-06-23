import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://picsum.photos/id/237/200/300" alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>

          <label>User Name</label>
          <input type="text" placeholder="john" />
          <label>Email</label>
          <input type="email" placeholder="useremail@email.com" />
          <label>Password</label>
          <input type="password" placeholder="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
