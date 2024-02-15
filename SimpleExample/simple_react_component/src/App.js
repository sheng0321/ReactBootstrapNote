import "./App.css";
import Example from "./Components/Example";
import AlertBootstrap from "./Components/AlertBootstrap";
import AlertDismissible from "./Components/AlertDismissible";
import VariantsExample from "./Components/VariantsExample";
import ColorMode from "./Components/ColorMode";
import ContainerExample from "./Components/ContainerExample";
import StackExample from "./Components/StackExample";

function App() {
  return (
    <div className="App">
      <Example />
      <hr />
      <AlertBootstrap />
      <hr />
      <AlertDismissible />
      <hr />
      <VariantsExample />
      <hr />
      <ColorMode />
      <hr />
      <ContainerExample />
      <hr />
      <StackExample />
    </div>
  );
}

export default App;
