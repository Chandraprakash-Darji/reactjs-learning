import ComponetC from "./Components/ComponetC";
import { UserProvider } from "./Components/userContext";

const App = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", placeItems: "center" }}
    >
      {/* When there is NO provider in Parent then it will render the Default Value */}
      <UserProvider value="Vishwas">
        <ComponetC />
      </UserProvider>
    </div>
  );
};

export default App;
