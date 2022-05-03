import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 100);
    intervalRef.current = interval;
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <div>Hooktimer - {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </>
  );
};

export default HookTimer;
