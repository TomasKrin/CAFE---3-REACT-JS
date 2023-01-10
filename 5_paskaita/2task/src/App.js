import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
  const products = [
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Germanto Sūris',
      price:2.99
    },
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Pilno riebumo pienas',
      price:1.99
    },
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Pilno riebumo pienas',
      price:1.99
    },
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Pilno riebumo pienas',
      price:1.99
    },
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Pilno riebumo pienas',
      price:1.99
    },
      {
      image:'https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT',
      title:'Pilno riebumo pienas',
      price:1.99
    },
  ]
  return (
    <div className="App">
      <div className='grid-table'>
        {products.map((item, index) =>
          <ProductCard img={item.image} title={item.title} price={item.price} index={index}/>
        )}
      </div>
    </div>
  );
}

export default App;
