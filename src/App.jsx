import './App.css';
import Navbar from './ReuseableComponent/Navbar';
import Footer from './ReuseableComponent/Footer';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Search from './Search/Search'
import ContactUs from './Contact/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Search />
      <Footer />
    </Router>
  );
}

export default App;
