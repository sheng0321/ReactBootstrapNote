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
import ToggleButtonExample from "./Components/ToggleButtonExample";
import CardExample from "./Components/CardExample";
import DropdownExample from "./Components/DropdownExample";
import ModalsExample from "./Components/ModalsExample";
import NavBarExample from "./Components/NavBarExample";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";

function App() {
  const [page,setPage]=useState("AboutPage");
  const handleNavPage=(thepage)=>{
    setPage(thepage);
   // alert(thepage);
  }
  return (
    <div className="App">
      <NavBarExample setPage={(thepage)=>handleNavPage(thepage)} />
      <Container>
    {page == "AboutPage" &&  <Example />}
      <hr />
    {page == "HomePage" && <AlertBootstrap />}
      <hr />
      { page == "ReportPage" && <AlertDismissible />}
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
      <hr />
      <ToggleButtonExample />
      <hr />
      <CardExample />
      <hr />
      <DropdownExample />
      <hr />
      <ModalsExample />
      </Container>
    </div>
    
  );
}

export default App;
