import './App.css';
import Avatar from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import MenuList from './components/MenuList/MenuList';

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
  return (
    <div>
      <MenuList customerType='couple'/>

      <div style={{display:'flex', gap:'10px', margin:'30px'}}>
        {avatarProps.map((prop, index)=><Avatar key={index} color={prop.color} backgroundColor={prop.backgroundColor}>{prop.text}</Avatar>)}
      </div>
      
      <div style={{width:'500px', height:'500px', backgroundColor:'#e8f4fd', display:'flex', justifyContent:'center'}}>
        {cardProps.map((prop)=><Card url={prop.url} title={prop.title} subtitle={prop.subtitle}/>)}
      </div>
    </div>
  );
}

export default App;
