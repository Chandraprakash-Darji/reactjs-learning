import React, { useState } from "react";

const HookCounter = () => {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);
  return (
    <>
      Count {count}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        increment
      </button>
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        decrement
      </button>
    </>
  );
};

export default HookCounter;
