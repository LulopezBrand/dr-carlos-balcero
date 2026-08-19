import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { Preloader } from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quien-soy" element={<About />} />
            <Route path="servicios" element={<Services />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
