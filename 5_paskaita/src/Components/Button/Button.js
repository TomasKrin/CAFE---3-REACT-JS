import {useState} from 'react';
import '../Button/Button.css';

const Button = ({availability}) => {
    const [quantity, setQuantity] = useState(1);
    return(
        <div className='buttonContainer'>
            <div className='amount'>  
                <button className='quantity quantityBtn' onClick={()=>setQuantity(quantity > 1 ? quantity - 1 : 1 )}>-</button>
                <span className='quantity'>{quantity}</span>
                <button className='quantity quantityBtn' onClick={()=>setQuantity(quantity < availability ? quantity + 1 : availability)}>+</button>
            </div>
            <button className='cartBtn'>ADD TO CART</button>
        </div>
    )
}

export default Button

