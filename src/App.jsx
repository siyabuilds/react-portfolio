import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import PulseLayer from "./components/PulseLayer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Analytics />
        <Background />
        <PulseLayer />
        <Navbar />
        {/* ModalHandler removed */}
        <main className="flex-1 mt-10 mb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
