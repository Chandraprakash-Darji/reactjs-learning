import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetchingUseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setPost({});
        setError(error.message);
      });
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? "Loading" : <div key={post.id}>{post.title} </div>}
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default DataFetchingUseEffect;
