import './App.css';
import Avatar from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import MenuList from './components/MenuList/MenuList';
import MoodChecker from './components/MoodChecker.js/MoodChecker';
import {useState} from 'react';
import CustomButton from './components/CustomButton/CustomButton';

function App() {
  const avatarProps = [{
    backgroundColor:'gray',
    color:'white',
    text: 'H'
  },
  {
    backgroundColor:'tomato',
    color:'white',
    text: 'N'
  },
  {
    backgroundColor:'purple',
    color:'white',
    text: 'OP'
  }]
  const cardProps = [{
    url: 'https://a-z-animals.com/media/2022/01/shutterstock_1994046608.jpg',
    title: 'Lizard',
    subtitle: 'Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica'
  }]

  const [activeMenu, setActiveMenu] = useState('single');
  const buttons = [
    {
    label: 'Show Single Menu',
    value: 'single'
  },
    {
    label: 'Show Couple Menu',
    value: 'couple'
  },
    {
    label: 'Show Family Menu',
    value: 'family'
  },
]

  return (
    <div>
  {buttons.map((button) => (
    <CustomButton
      key={button.value}
      variant={activeMenu === button.value ? "contained" : "outlined"}
      onClick={() => setActiveMenu(button.value)}
    >
      {button.label}
    </CustomButton>
))}
      {/* <CustomButton variant={activeMenu === 'single' ? 'contained' : 'outlined'} onClick={()=>{setActiveMenu('single')}}>Show Single Menu</CustomButton>
      <CustomButton variant={activeMenu === 'couple' ? 'contained' : 'outlined'} onClick={()=>{setActiveMenu('couple')}}>Show Couples Menu</CustomButton>
      <CustomButton variant={activeMenu === 'family' ? 'contained' : 'outlined'} onClick={()=>{setActiveMenu('family')}}>Show Family Menu</CustomButton> */}
      <MenuList customerType={activeMenu}/>

      <div style={{display:'flex', gap:'10px', margin:'30px'}}>
        {avatarProps.map((prop, index)=><Avatar key={index} color={prop.color} backgroundColor={prop.backgroundColor}>{prop.text}</Avatar>)}
      </div>
      
      <div style={{width:'500px', height:'500px', backgroundColor:'#e8f4fd', display:'flex', justifyContent:'center'}}>
        {cardProps.map((prop)=><Card url={prop.url} title={prop.title} subtitle={prop.subtitle}/>)}
      </div>
      <div>
        <MoodChecker/>
      </div>
    </div>
  );
}

export default App;
