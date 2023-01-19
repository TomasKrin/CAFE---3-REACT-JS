import "./App.css";
import Button from "./Components/Button/Button";
import styled from "styled-components";
import CustomButton from "./Components/CustomButton.js/CustomButton";
import CustomInput from "./Components/CustomInput/CustomInput";

const Container = styled.div`
  padding: 40px;
  display: flex;
`;

const TomatoButton = styled(CustomButton)`
  color: tomato;
  border-color: tomato;
`;

//size: 'sm' | 'lg' | 'xl'
const props = { size: "xl", inputColor: "rebeccapurple" };

function App() {
  return (
    <div>
      <Container>
        <Button />
      </Container>
      <Container>
        <CustomButton>Mano Button</CustomButton>
        <TomatoButton as="a" href="https://www.google.com/">
          Mano Pomidorinis Mygtukas
        </TomatoButton>
      </Container>
      <Container>
        <CustomInput defaultValue="Tomas" />
        <CustomInput defaultValue="Tomas" inputColor="red" size="lg" />
        <CustomInput
          defaultValue="Tomas"
          inputColor={props.inputColor}
          size={props.size}
        />
      </Container>
    </div>
  );
}

export default App;
