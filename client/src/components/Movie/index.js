import './style.css'

const index = ({ image, alt, title, desc, href }) => {
    return (
        <div className="movie">
            <img src={image} alt={alt}/>
            <div className="movie-info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={href} className="btn">Book Now</a>
            </div>
        </div>
    )
}

export default index
