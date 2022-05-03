import "./App.css";
import Greet from "./components/Props Type/Greet";
import Heading from "./components/Props Type/Heading";
import Oscar from "./components/Props Type/Oscar";

function App() {
  return (
    <div className="App">
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicapario!</Heading>
      </Oscar>
      <Greet name="Moon light"  isLoggedIn={false} />
    </div>
  );
}

export default App;
