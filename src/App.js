import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import '@fontsource/poppins';
import '@fontsource/montserrat';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main className="main__content">
          <Container>
            <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
