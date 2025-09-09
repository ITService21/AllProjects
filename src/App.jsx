import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//About Us

import AnimatedBanner from "./Binner/Binner";
import ContactUs from "./Pages/Contact";
import CompanyVisionMission from "./Pages/MissionAndMission";
import CompanyOverview from "./Pages/CompanyOverview";
import SimpleTeamPage from "./Pages/WorkerTeam";
import Certifications from "./Pages/Certifications";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnimatedBanner />} />
            <Route path="/home" element={<AnimatedBanner />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us/mission-vision" element={<CompanyVisionMission />} />
            <Route path="/about-us/overview" element={<CompanyOverview />} />
             <Route path="/about-us/ourteam" element={<SimpleTeamPage />} />
             <Route path="/about-us/certifications" element={<Certifications />} />
          </Routes>
        </main>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
