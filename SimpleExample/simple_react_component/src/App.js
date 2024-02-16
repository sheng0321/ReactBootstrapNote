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
import Form from "react-bootstrap/Form";

function App() {
  const [page,setPage]=useState("AboutPage");
  //const [themeModal,setThemeModal]=useState("light");
  const [isChecked,setIsChecked]=useState(false)
  const handleSwitchChange=(e)=>{
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    
  }
  
  const handleNavPage=(thepage)=>{
    setPage(thepage);
   // alert(thepage);
  }
  return (
    <div className="App">
      <NavBarExample setPage={(thepage)=>handleNavPage(thepage)} />
      <Form.Check // prettier-ignore
        type="switch"
        checked ={isChecked}
        onChange={handleSwitchChange}
        label="Check this switch"
      />
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
