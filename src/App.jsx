import ErorrBoundry from "./Components/ErorrBoundry";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      <ErorrBoundry>
        <Hero heroName="Batman" />
      </ErorrBoundry>
      <ErorrBoundry>
        <Hero heroName="SuperMan" />
      </ErorrBoundry>
      <ErorrBoundry>
        <Hero heroName="Joker" />
      </ErorrBoundry>
    </div>
  );
};

export default App;
