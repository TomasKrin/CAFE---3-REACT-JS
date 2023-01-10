import "./CustomButton.css";

// receive 'varian' as a prop
// handle 3 variants: 'text', 'container', 'outlined'
// all text uppercased
// get hex of blue color

const CustomButton = ({variant, onClick,children}) => {
    if(variant === 'text'){
        return <button onClick={onClick} className='button text'>{children}</button>
    }else if(variant === 'outlined'){
        return <button onClick={onClick} className='button outlined'>{children}</button>
    }else{

        return <button onClick={onClick} className='button contained'>{children}</button>
    }
}

export default CustomButton;