import { createContext, useReducer } from "react";
import ComponentA from "./components/useReducer/ComponentA";
import ComponentB from "./components/useReducer/ComponentB";
import ComponentC from "./components/useReducer/ComponentC";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <i>⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮ ⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮</i>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
      <i>⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮ ⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮⋮</i>
    </div>
  );
}
