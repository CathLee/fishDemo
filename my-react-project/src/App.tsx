import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Home';
import ArtworkDetail from './pages/ArtworkDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/artwork/:id" element={<ArtworkDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
