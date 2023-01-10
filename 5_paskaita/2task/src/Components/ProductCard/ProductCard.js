import '../ProductCard/ProductCard.css';

const ProductCard = ({img ,price, title}) => {
    return(
        <div className='item'>
            <img src={img} alt="product" />
            <p>{title}</p>
            <span>&euro;{price}</span>
        </div>
    )
}

export default ProductCard