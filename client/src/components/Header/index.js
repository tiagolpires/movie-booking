import { Link } from 'react-router-dom'
import './style.css'

const index = () => {
    return (
        <header>
            <nav>
                <Link to="/">Movies</Link>
                <Link to="/book">Book</Link>
                <Link to="/bookings">Bookings</Link>
            </nav>
        </header>
    )
}

export default index
