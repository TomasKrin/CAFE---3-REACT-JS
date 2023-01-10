import './App.css';
import Product from './Components/Product/Product';

function App() {
  const description = {
    line1: '12 unique designs',
    line2: 'All pieces are printed on heavyweight 200 gms art paper',
    line3: 'Limited to 50 pieces',
    line4: 'One size:',
    size: '11.7x16.5 inch / (297x420mm)'
  };
  return (
    <div className='mainContainer'>
      <Product image='https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg' title='Volkswagen GOLF MK2 2022 Calendar' price='10.00' description={description} availability={10} category='Calendars'/>
    </div>
  );
}

export default App;
