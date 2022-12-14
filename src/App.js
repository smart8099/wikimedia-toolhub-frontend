import './assets/App.css';
import './assets/lboard.css';
import './assets/rboard.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar  from './pages/components/Navbar';
import Leaderboard from './pages/Leaderboard';
import RecordsBoard from './pages/RecordsBoard';


function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="recordsboard" element={<RecordsBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
