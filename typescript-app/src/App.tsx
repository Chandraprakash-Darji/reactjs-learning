import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={[
          { first: "C", last: "P" },
          { first: "Chandra", last: "Prakash" },
          { first: "Rega", last: "" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
