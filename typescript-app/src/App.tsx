import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  return (
    <div className="App">
      <Private RenderComponent={Profile} isLoggedIn={true} />
    </div>
  );
}

export default App;
