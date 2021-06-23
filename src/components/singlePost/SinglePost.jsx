import './singlepost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
          alt=""
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
          ea eius ullam similique numquam fuga commodi, quam unde vero. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem
          dolor pariatur numquam minus voluptatem quaerat ratione error minima
          iusto! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem ad ea eius ullam similique numquam fuga commodi, quam unde
          vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate rem dolor pariatur numquam minus voluptatem quaerat ratione
          error minima iusto! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem ad ea eius ullam similique numquam fuga
          commodi, quam unde vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate rem dolor pariatur numquam minus
          voluptatem quaerat ratione error minima iusto! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Dolorem ad ea eius ullam similique
          numquam fuga commodi, quam unde vero. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate rem dolor pariatur numquam
          minus voluptatem quaerat ratione error minima iusto! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Dolorem ad ea eius ullam
          similique numquam fuga commodi, quam unde vero. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate rem dolor pariatur
          numquam minus voluptatem quaerat ratione error minima iusto!
        </p>
      </div>
    </div>
  );
}
