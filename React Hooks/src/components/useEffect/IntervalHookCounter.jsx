import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setcount((prevCount) => prevCount + 1);
  };

  return <h1>{count}</h1>;
};

export default IntervalHookCounter;
