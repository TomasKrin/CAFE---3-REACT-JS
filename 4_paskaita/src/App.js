import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';
import React, { useState } from "react";
import Greeting from './Components/Greeting/Greeting';
import Button from './Components/button/Button'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const fruites = ['banana', 'pineappel', 'apple'];

  const buttons = [{
    variant: 'text',
    text: 'help me to get random number',
  },
  {
    variant: 'outlined',
    text: 'i am an outcast'
  },
  {
    variant: 'contained',
    text: 'contained container'
  }
]

  const handleAddCount = () =>{
    setCount(count + 1);
  }
  return (
<div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
<div style={{display:'block'}}>
  <CustomButton variant='text'>Text</CustomButton>
  <CustomButton variant='contained'>Contained</CustomButton>
  <CustomButton variant='outlined'>Outlined</CustomButton>
  </div>
  <div style={{display:'block'}}>
  <Greeting isLoggedIn={isLoggedIn} />
  {isLoggedIn ? 
    (<button onClick={()=>{setIsLoggedIn(false)}}>Log Out</button>)
  :(
    <button onClick={()=>{setIsLoggedIn(true)}}>Log In</button>)}
    </div>
  <div style={{display:'block'}}>
    <Button onClick={handleAddCount}>Plus one</Button>
    <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>
        {count}
  
    </span>
  <Button onClick={() => setCount(count - 1)} backgroundColor="black">
  Minus one
  </Button>
  <span style={{ marginLeft: 8, color: "red" }}>
        {count < 0 && "Negalima pasirinkti mažiau nei 0 prekių."}
        {count > 9 && "Jūs pasirinkote per didelį kiekį prekių."}
  </span>
  </div>
  <div style={{display:'block'}}>
    {['Zalia', 'Geltona', 'Raudona'].map(text => <CustomButton key={text}>{text}</CustomButton>)}
  </div>
    <ul>
      {fruites.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
    </ul>
  <div style={{display:'block'}}>
    {buttons.map((button, index) => <CustomButton key={index} variant={button.variant}>{button.text}</CustomButton>)}
  </div>
</div>
  );
}

export default App;
