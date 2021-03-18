import { Link } from 'react-router-dom'
import './style.css'

const index = () => {
    return (
        <nav>
            <Link to="/">Movies</Link>
            <Link to="/book">Book</Link>
            <Link to="/bookings">Bookings</Link>
        </nav>
    )
}

export default index
