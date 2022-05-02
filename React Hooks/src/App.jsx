import ClassCounter from "./Componets/UseState/ClassCounter";
import FuncCounter from "./Componets/UseState/FuncCounter";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      <ClassCounter />
      <FuncCounter />
    </div>
  );
};

export default App;
