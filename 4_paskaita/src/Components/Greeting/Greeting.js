const Greeting = ({isLoggedIn}) => {
    return (
        <p>{isLoggedIn ? 'hello user': 'you need to log in first.'}</p>
    )
}

export default Greeting;