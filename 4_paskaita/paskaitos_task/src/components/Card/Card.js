import '../Card/Card.css';

const Card = ({url, title, subtitle}) => {
    return(
        <div className='card'>
            <img src={url} alt="pic" />
            <div className='content'>
                <h1>{title}</h1>
                <p className='subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default Card