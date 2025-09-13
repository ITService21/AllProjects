import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
//About Us

import AnimatedBanner from "./Binner/Binner";
import ContactUs from "./Pages/Contact";
import CompanyVisionMission from "./Pages/MissionAndMission";
import CompanyOverview from "./Pages/CompanyOverview";
import SimpleTeamPage from "./Pages/WorkerTeam";
import Certifications from "./Pages/Certifications";
import ServicesPage from "./Pages/Services";
import BlogPage from "./Pages/Blog";

// Service Pages
import AllServices from "./Pages/Services/AllServices";
import FundingConsultant from "./Pages/Services/FundingConsultant";
import CertificateConsultant from "./Pages/Services/CertificateConsultant";
import MarketingServices from "./Pages/Services/MarketingServices";
import LegalServices from "./Pages/Services/LegalServices";

// About Us Pages
import Partners from "./Pages/Partners";

// Gallery Pages
import Albums from "./Pages/Gallery/Albums";
import Videos from "./Pages/Gallery/Videos";



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
            <Route path="/about-us/partners" element={<Partners />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/services/all" element={<AllServices />} />
            <Route path="/services/funding" element={<FundingConsultant />} />
            <Route path="/services/certificate" element={<CertificateConsultant />} />
            <Route path="/services/marketing" element={<MarketingServices />} />
            <Route path="/services/legal" element={<LegalServices />} />
            <Route path="/gallery/albums" element={<Albums />} />
            <Route path="/gallery/videos" element={<Videos />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
      
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
