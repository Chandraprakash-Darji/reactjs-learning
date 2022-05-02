import ClickCounterTwo from "./Components/ClickCounterTwo";
import CounterTwo from "./Components/CounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import User from "./Components/User";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Rega" : "Guest")} /> */}
      <CounterTwo>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
      <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
    </div>
  );
};

export default App;
