import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Scrapbook from './Scrapbook';
import Mentors from './Mentors';
import Navbar from './components/Navbar';
import NotFound from './NotFound';

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/register' element={< Register />}></Route>
                    <Route exact path='/scrapbook' element={< Scrapbook />}></Route>
                    <Route exact path='/mentors' element={< Mentors />}></Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;
