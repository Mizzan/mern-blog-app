import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://picsum.photos/id/237/200/300" alt="profile" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          accusantium sunt rerum iste quas tempore laborum delectus, cum
          consectetur enim eos recusandae, quidem perspiciatis a!
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i class="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
