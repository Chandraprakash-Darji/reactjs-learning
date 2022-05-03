import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const DataFetchingUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  return (
    <div>
      {state.loading ? (
        "Loading"
      ) : (
        <div key={state.post.id}>{state.post.title} </div>
      )}
      {state.error ? <div>{state.error}</div> : null}
    </div>
  );
};

export default DataFetchingUseReducer;
