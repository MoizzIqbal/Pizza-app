import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
function App() {
  return (
   <>
    <Router>
   <Navbar />
      <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/menu'  element={<Menu />}/>
      <Route path='/about'  element={<About />}/>
      <Route path='/contact'  element={<Contact />}/>
      <Route path='/cart'  element={<Cart />}/>

      </Routes>
      <Footer />
    </Router>


   </>
  );
}

export default App;
