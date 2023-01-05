
import "./App.css"
import Button from "./button/Button";

const App = () => {
  return (
    <div>
      <Button onClick={() => alert('Sveiki, kaip sekasi')}>Say Hello</Button>
      <Button onClick={() => alert('Aciu geros dienos')}>Say Hello</Button>
      <Button backgroundColor={0}></Button>
    </div>
  )
}

export default App;