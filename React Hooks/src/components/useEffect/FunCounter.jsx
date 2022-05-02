import React, { useEffect, useState } from "react";

const FunCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    // [count] will only run useEffect if the count value is changed
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default FunCounter;
