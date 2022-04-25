import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      <ClickCounter name='CP'/>
      <HoverCounter/>
    </div>
  );
};

export default App;
