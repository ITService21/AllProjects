import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//About Us
import TestimonialsSection from "./Pages/Testimonials";

import AnimatedBanner from "./Binner/Binner";
import ContactUs from "./Pages/Contact";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnimatedBanner />} />
            <Route path="/home" element={<AnimatedBanner />} />
            <Route path="/Testimonials" element={<TestimonialsSection />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
