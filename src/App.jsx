// import Navbar from './components/Navbar';
// import Hero from './pages/Hero';
// import Features from './pages/Features';
// import Portfolio from './pages/Portfolio';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Features />
//       <Portfolio />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials"; // Import the new page
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} /> {/* Add this */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
