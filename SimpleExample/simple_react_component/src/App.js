import "./App.css";
import Example from "./Components/Example";
import AlertBootstrap from "./Components/AlertBootstrap";
import AlertDismissible from "./Components/AlertDismissible";
import VariantsExample from "./Components/VariantsExample";
import ColorMode from "./Components/ColorMode";
import ContainerExample from "./Components/ContainerExample";
import StackExample from "./Components/StackExample";
import FormsExample from "./Components/FormsExample";
import AccordionExample from "./Components/AccordionExample";
import AlertExample from "./Components/AlertExample";
import LoadingButton from "./Components/LoadingButton";

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
      <hr />
      <FormsExample />
      <hr />
      <AccordionExample />
      <hr />
      <AlertExample />
      <hr />
      <LoadingButton />
    </div>
    
  );
}

export default App;
