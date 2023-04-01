import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="gradient__bg">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
