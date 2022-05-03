import "./App.css";
import Greet from "./components/Props Type/Greet";
import Person from "./components/Props Type/Person";
import PersonList from "./components/Props Type/PersonList";

function App() {
  const personName = {
    first: "Moon",
    last: "Light",
  };

  const nameList = [
    {
      first: "Chandra",
      last: "Prakash",
    },
    {
      first: "Moon",
      last: "Light",
    },
    {
      first: "C",
      last: "P",
    },
  ];

  return (
    <div className="App">
      <Greet name="Moon Light" msgCount={30} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
