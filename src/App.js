import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import SkillShowcase from './components/SkillShowcase/SkillShowcase';
import Experience from './components/Experience/Experience';
import Accomplishment from './components/Accomplishment/Accomplishment';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DynamicTitle from './DynamicTitle';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <DynamicTitle />
          <Header />
          <About />
          <SkillShowcase />
          <Experience />
          <Accomplishment />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
