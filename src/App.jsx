import { Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    
      <main className="max-w-7xl mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </main>
   
  );
}

export default App;
