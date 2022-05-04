import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  value: number;
};

const initialState = { count: 0 };
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count.count}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
    </div>
  );
};

export default Counter;
