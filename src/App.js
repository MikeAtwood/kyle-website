import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import backgroundImg from './assets/img/back.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
    <div className="App">
      <NavBar />
      <Banner />
    </div>
    </div>
  );
}

export default App;
