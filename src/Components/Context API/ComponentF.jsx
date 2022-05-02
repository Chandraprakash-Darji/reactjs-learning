import React from "react";
import { UserConsumer } from "./userContext";

const ComponetF = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
    </UserConsumer>
  );
};

export default ComponetF;
