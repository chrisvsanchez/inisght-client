import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <>
      Posts
      {!!posts[0] ? (
        posts.map((post) => <img alt="default" src={post.photo_url} />)
      ) : (
        <h3>LOADING</h3>
      )}
    </>
  );
}
export default Posts;
