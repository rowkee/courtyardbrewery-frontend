import './App.css';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import BeersPage from './components/BeersPage.jsx';
import AboutUsPage from './components/AboutUsPage.jsx'
import BreweryTapPage from './components/BreweryTapPage.jsx'
import SudburyTapPage from './components/SudburyTapPage.jsx'
import HalsteadTapPage from './components/HalsteadTapPage.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/our-locations/brewery" element={<BreweryTapPage />} />
        <Route path="/our-locations/sudbury" element={<HalsteadTapPage />} />
        <Route path="/our-locations/halstead" element={<SudburyTapPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
