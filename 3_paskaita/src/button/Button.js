import PropTypes from "prop-types";
import './Button.css';

const Button = ({onClick, children, backgroundColor}) => {
    return(
        <button className='styled-button' onClick ={(onClick)} style={{backgroundColor}}>{children}</button>
    )
   
}

Button.propTypes = {
    backgroundColor: PropTypes.string, //Optional
    onClick: PropTypes.func, //optional function
    // children: PropTypes.node //optional any react thing
    children: PropTypes.node.isRequired //required any react thing
}

export default Button;