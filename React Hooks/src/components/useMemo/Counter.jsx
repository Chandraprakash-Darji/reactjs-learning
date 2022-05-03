import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // useCallback invokes the function
  // useMemo invokes the value of Function
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <fieldset>
        <button onClick={incrementOne}>Counter One {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </fieldset>
      <fieldset>
        <button onClick={incrementTwo}>Counter One {counterTwo}</button>
      </fieldset>
    </div>
  );
};

export default Counter;
