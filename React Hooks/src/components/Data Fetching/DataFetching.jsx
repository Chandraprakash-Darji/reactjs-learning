import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [postID, setPostID] = useState(1);
  const [idFromButtonClicked, setIdFromButtonClicked] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(error.message);
      });
  }, [idFromButtonClicked]);

  const handleClick = () => {
    setIdFromButtonClicked(postID);
  };
  return (
    <div>
      <input
        type="number"
        min="1"
        max="100"
        value={postID}
        onChange={(e) => setPostID(e.target.value)}
      />
      {post ? <div key={post.id}>{post.title} </div> : null}
      {errorMsg ? <div>{errorMsg}</div> : null}
      <button onClick={handleClick}>Find</button>
    </div>
  );
};

export default DataFetching;
