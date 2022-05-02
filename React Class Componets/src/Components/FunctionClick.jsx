import React from "react";

const FunctionClick = () => {
  const handleClick = () => {
    console.log("Button Click");
  };

  return <button onClick={handleClick}>Click</button>;
};

export default FunctionClick;
