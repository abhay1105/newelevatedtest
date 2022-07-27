import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import Programs from './Programs';
import Scrapbook from './Scrapbook';
import Mentors from './Mentors';
import Navbar from './components/Navbar';
import NotFound from './NotFound';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/programs' element={< Programs />}></Route>
                    <Route exact path='/scrapbook' element={< Scrapbook />}></Route>
                    <Route exact path='/mentors' element={< Mentors />}></Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
            <Footer />
        </div>

    );
}

export default App;
