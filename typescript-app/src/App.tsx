import "./App.css";
import Container from "./components/Props Type/Container";

function App() {
  return (
    <div className="App">
      <Container
        styles={{ border: "1px solid black", padding: "1rem", width: "100%" }}
      />
    </div>
  );
}

export default App;
