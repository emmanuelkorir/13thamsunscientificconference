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
import Feature from './components/Feature';
import AboutSection from './components/About';
import Footer from './components/Footer';	
import Programme from './pages/Programme';
import Speakers from './pages/Speakers';
import FAQs from './pages/FAQs';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main className="main__content">
          <Container>
            <Routes>
            <Route path="/" element={
            <div>
            <Banner /> 
            <AboutSection />
            <Feature />
            </div>
            }/>
            <Route path="programme" element={<Programme />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="FAQs" element={<FAQs />} />
            </Routes>
          </Container>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
