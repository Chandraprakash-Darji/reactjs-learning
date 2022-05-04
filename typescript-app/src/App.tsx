import "./App.css";
import Button from "./components/Props Type/Button";
import Input from "./components/Props Type/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("clicked", event, id)} />
      <Input value="" handleClick={(event) => console.log(event)} />
    </div>
  );
}

export default App;
