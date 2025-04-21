import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./components/AboutUs";
import ServiceCarousel from "./components/ServiceCarousel";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testinomial";
import PartnerLogos from "./components/PartnerLogos";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeaturesSection />
                  <AboutUs />
                  <ServiceCarousel />
                  <Testimonials />
                  <PartnerLogos />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
