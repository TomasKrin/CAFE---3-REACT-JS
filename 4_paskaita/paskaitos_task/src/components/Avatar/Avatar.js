import '../Avatar/Avatar.css';

const Avatar = ({backgroundColor, color, children}) => {
    return (
        <div className='avatar' style={{backgroundColor:`
        ${backgroundColor}`, color:`${color}`}}>
            <p>{children}</p>
        </div>
    )
};

export default Avatar