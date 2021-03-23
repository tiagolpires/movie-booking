import Header from '../../components/Header'
import './style.css'

const index = () => {
    return (
        <>
            <Header/>
            <section className="bookings-section">
                <h1>Your Bookings</h1>
                <div className="bookings-container">
                    <div className="booking-ticket">
                        <div className="ticket-seat">
                            <h2>A01</h2>
                            <div className="ticket-division"></div>
                        </div>
                        <div className="booking-info">
                            <h3>Once Upon a time in Hollywood</h3>
                            <span><b>Name:</b> Júlia</span>
                            <span><b>Seat:</b> A01</span>
                        </div>
                    </div>
                    <div className="booking-ticket">
                        <div className="ticket-seat">
                            <h2>A01</h2>
                            <div className="ticket-division"></div>
                        </div>
                        <div className="booking-info">
                            <h3>Once Upon a time in Hollywood</h3>
                            <span><b>Name:</b> Júlia</span>
                            <span><b>Seat:</b> A01</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
