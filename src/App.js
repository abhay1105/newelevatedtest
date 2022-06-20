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

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path='/home' element={< Home />}></Route>
                    <Route exact path='/register' element={< Register />}></Route>
                    <Route exact path='/scrapbook' element={< Scrapbook />}></Route>
                    <Route exact path='/mentors' element={< Mentors />}></Route>
                </Routes>
            </Router>
        </div>

    );
}

export default App;
