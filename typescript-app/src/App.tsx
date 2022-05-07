import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Chandraprakash", "Moon Light", "Rega", "CP", "Chandu"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
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
