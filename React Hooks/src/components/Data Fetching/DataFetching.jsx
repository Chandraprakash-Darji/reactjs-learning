import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(error.message);
      });
  }, []);

  return (
    <div>
      DataFetching
      <ul>
        {posts.length
          ? posts.map((post) => <li key={post.id}>{post.title} </li>)
          : null}
        {errorMsg ? <li>{errorMsg}</li> : null}
      </ul>
    </div>
  );
};

export default DataFetching;
