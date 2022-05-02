import ClassCounter from "./Componets/UseState/ClassCounter";
import FuncCounter from "./Componets/UseState/FuncCounter";
import HookCounter from "./Componets/UseState/HookCounter";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      <HookCounter/>
    </div>
  );
};

export default App;
