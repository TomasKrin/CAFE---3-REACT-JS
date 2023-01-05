import "./App.css"
import Product from "./components/Product/Product";
import Products from "./components/Products/Products";
// import Button from "./button/Button";
// import { useState } from 'react'

const App = () => {
  // const name = 'Tomas';
  // const array=[1,2];
  // const first = array[0];
  // const second = array[1];
  // const [first, second]=array;

  //React hook  - useState - storing infromation and setting information

  // const [name, setName] = useState('Tomas');
  // const [age, setAge] = useState(24);
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <Button onClick={() => alert('Sveiki, kaip sekasi')}>Say Hello</Button>
  //     <Button onClick={() => alert('Aciu geros dienos')}>Say Hello</Button>
  //     <Button backgroundColor='red' onClick={()=>{
  //       setAge(age * 2)
  //     }}>Help my age is {age}</Button>
  //     <Button backgroundColor='green' onClick={()=>{
  //       setName('Tadas');
  //     }}>{name}</Button>
  //     <Button onClick={()=>{
  //       setCount(count + 1)
  //     }}>Plus one</Button>
  //     <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>{count}</span>
  //     <Button backgroundColor="black" onClick={()=>{setCount(count-1)}}>Minus one</Button>
  //   </div>
  // )

    return(
      <div className="container">
        <h1>Best Sellers</h1>
        <Products>
          <Product category='Canvases' name='OFF-WHITE AIR JORDAN 1 CANVAS' price='32.00&euro; - 120.00 &euro;'/>
          <Product category='Posters' name='YEEZY BOOST 350 V2 FROZEN YELLOW POSTER' price='16.00&euro; - 32.00 &euro;'/>
          <Product category='Stickers' name='YEEZY 350 V2 ZEBRA STICKER' price='5.00&euro;'/>
          <Product category='Adidas' name='ADIDAS YEEZY POWERPHASE CALABASAS POSTER' price='16.00&euro; - 32.00 &euro;'/>
          <Product category='Jordans' name='AIR JORDAN 4 RED SUEDE POSTER' price='16.00&euro; - 32.00 &euro;'/>
          <Product category='Balenciaga' name='BALENCIAGA TRIPLE S POSTER' price='16.00&euro; - 32.00 &euro;'/>
          <Product category='Nike' name='NIKE BLAZER MID SACAI POSTER' price='16.00&euro; - 32.00 &euro;'/>
          <Product category='Artists' name='LIL PEEP POSTER' price='16.00&euro; - 32.00 &euro;'/>
        </Products>
        
      </div>
  )
}

export default App;