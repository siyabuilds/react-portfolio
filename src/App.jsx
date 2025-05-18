import { useEffect } from "react";
import Swal from "sweetalert2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import PulseLayer from "./components/PulseLayer";
import { Analytics } from "@vercel/analytics/react";

function ModalHandler() {
  const location = useLocation();

  useEffect(() => {
    const count = parseInt(sessionStorage.getItem("modalClickCount")) || 0;
    const newCount = count + 1;
    sessionStorage.setItem("modalClickCount", newCount);

    if (newCount % 15 === 0 || newCount === 1) {
      Swal.fire({
        title: "Portfolio has moved!",
        text: "A new portfolio has been made available. Visit my new portfolio for the latest projects.",
        icon: "info",
        confirmButtonText: "Visit New Portfolio",
        confirmButtonColor: "var(--primary)",
        background: "var(--background)",
        color: "var(--foreground)",
        customClass: {
          popup: "rounded-xl shadow-lg",
          confirmButton: "px-4 py-2 hover:bg-[var(--hover-bg)]",
        },
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://samsonlukhele.me", "_blank");
        }
      });
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Analytics />
        <Background />
        <PulseLayer />
        <Navbar />
        <ModalHandler />
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
