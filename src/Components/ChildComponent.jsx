import React from "react";

const ChildComponent = ({ greetMethod }) => {
  return <button onClick={()=> greetMethod("Child")}>Greet parent</button>;
};

export default ChildComponent;
