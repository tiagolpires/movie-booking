import { BrowserRouter, Route} from 'react-router-dom'
import Main from './pages/Main'
import Bookings from './pages/Bookings'
import Book from './pages/Book'
import Nav from './components/NavBar'

const Routes = ({ teste }) => {
    return (
        <BrowserRouter>
            <>
                <Nav/>
                <Route path='/' exact component={Main}/>
                <Route path='/book' component={Book}/>
                <Route path='/bookings' render={(props) => <Bookings {...props} teste={teste} />} />
            </>
        </BrowserRouter>
    )
}

export default Routes
