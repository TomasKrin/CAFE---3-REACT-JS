import './Products.css';

const Products = ({children}) => {
    return (
        <div className='grid-table'>
            {children}
        </div>
       
    )
}

export default Products