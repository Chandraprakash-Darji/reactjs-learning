import { useContext } from "react";
import { CountContext } from "../../App";

const ComponentF = () => {
  const countContext = useContext(CountContext);
  const { countState, countDispatch } = countContext;
  return (
    <div>
      <hr />
      ComponentF - {countState}
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
      <hr />
    </div>
  );
};

export default ComponentF;
