import CustomButton from "./components/html/Button";
import CustomInput from "./components/html/CustomInput";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
      <CustomInput />
      
    </div>
  );
}

export default App;
