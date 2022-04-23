import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is Childern P</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan">
        <button>Action</button>
      </Greet>
      <Greet name="Tony" heroName="IronMan" />
      <Welcome name="Bruce" heroName="Batman">
        <p>This is Childern P</p>
      </Welcome>
      <Welcome name="Clark" heroName="SuperMan">
        <button>Action</button>
      </Welcome>
      <Welcome name="Tony" heroName="IronMan" />
    </div>
  );
}

export default App;
