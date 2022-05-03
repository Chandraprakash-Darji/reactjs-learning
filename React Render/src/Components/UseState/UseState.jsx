import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count = {count}</button>
      {/* Only Update the render Once Because set remains same
      when there is no state change then it not flag as updateable
      hence component remains same */}
      <button onClick={() => setCount(0)}>Count = 0</button>
      <button onClick={() => setCount(5)}>Count = 5</button>
    </div>
  );
};

export default UseState;
