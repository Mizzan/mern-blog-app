import './header.css';

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <div className="headerTitleSm">React & Node</div>
          <div className="headerTitleLg">Blog</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
          alt=""
          className="headerImg"
        />
      </div>
    </div>
  );
}
