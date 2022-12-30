import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Captures } from './components/Captures';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import backgroundImg from './assets/img/back.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
    <div className="App">
      <NavBar />
      <Captures /> 
      <Banner />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
