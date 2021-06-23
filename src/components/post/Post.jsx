import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        alt="post pic"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Sports</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque fugit
        mollitia consectetur sed facere architecto minus, recusandae, autem
        laudantium deleniti, nisi vitae minima inventore hic tenetur veniam
        dolorum fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ad atque fugit mollitia consectetur sed facere architecto minus,
        recusandae, autem laudantium deleniti, nisi vitae minima inventore hic
        tenetur veniam dolorum fuga! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad atque fugit mollitia consectetur sed facere
        architecto minus, recusandae, autem laudantium deleniti, nisi vitae
        minima inventore hic tenetur veniam dolorum fuga! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ad atque fugit mollitia consectetur
        sed facere architecto minus, recusandae, autem laudantium deleniti, nisi
        vitae minima inventore hic tenetur veniam dolorum fuga! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ad atque fugit mollitia
        consectetur sed facere architecto minus, recusandae, autem laudantium
        deleniti, nisi vitae minima inventore hic tenetur veniam dolorum fuga!
      </p>
    </div>
  );
}
