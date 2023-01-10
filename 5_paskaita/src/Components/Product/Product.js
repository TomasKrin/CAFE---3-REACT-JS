import ArrowButtons from '../ArrowButtons/ArrowButtons';
import Button from '../Button/Button';
import '../Product/Product.css';

const Product = ({image, title, price, description, availability, category}) => {
  return (
    <div className='product'>
        <img src={image} alt="Pic" />
        <div className='product-description'>
            <h1>{title}<ArrowButtons/></h1>
            <span className='price'>{price} &euro;</span>
            <p>{description.line1}</p>
            <p>{description.line2}</p>
            <p>{description.line3}</p>
            <p>{description.line4}</p>
            <p>{description.size}</p>
            <p className='availability'>Availability: <span className='inStock'>{availability} in stock</span></p>
            <Button availability={availability}></Button>
            <p className='category'>Category: {category}</p>
        </div>
    </div>
  )
}

export default Product