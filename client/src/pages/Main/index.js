import './style.css'
import Movie from '../../components/Movie'

const index = () => {
    return (
        <>
            <main>
                <div className="main-info-container">
                    <h1>Movie Booking</h1>
                    <p>
                        Online movie booking  has never<br/>
                        been more easy
                    </p>
                    <a href="/" className="btn">Book</a>
                </div>
                <img src="/images/baby-yoda.jpg" alt="yoda"/>
            </main>
            <section className="movies-container">
                <Movie 
                    image='/images/out-hollywood-1.jpg'
                    alt='once-upon-a-time-in-hollywood'
                    title='Once Upon a Time in Holywood'
                    desc='A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywoods Golden Age in 1969 Los Angeles.'
                    href='/'
                />
                <Movie 
                    image='/images/walter-mitty.jpg'
                    alt='walter-mitty'
                    title='The Secret Life Of Walter Mitty'
                    desc='A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywoods Golden Age in 1969 Los Angeles.'
                    href='/'
                />
            </section>
        </>
    )
}

export default index
