import React, { useEffect, useRef, useState } from "react";

const MutabelRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRref = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRref.current) window.clearInterval(intervalRref.current);
  };

  useEffect(() => {
    intervalRref.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => stopTimer();
  }, []);

  return (
    <div>
      Hook TImer - ({timer}) -{" "}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutabelRef;
