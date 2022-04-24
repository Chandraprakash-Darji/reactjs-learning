import React from "react";

const MemoCompo = ({ name }) => {
  console.log("Rendering memo Component");
  return <div>{name}</div>;
};

export default React.memo(MemoCompo);
