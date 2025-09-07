import React from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaTheaterMasks,
  FaSmile,
  FaSchool,
  FaUsers,
  FaLaptopCode,
  FaRegQuestionCircle,
} from "react-icons/fa";

const Facilities = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[300px] custom-bg-position bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
        style={{
          backgroundImage: "url('/image/slide2A.jpg')",
          backgroundSize: "contain",
        }}
      >
        <style jsx>{`
          @media (max-width: 640px) {
            .custom-bg-position {
              background-position: center top -10px !important;
            }
          }
          @media (min-width: 768px) {
            .custom-bg-position {
              background-position: center top -160px !important;
            }
          }
          @media (min-width: 1024px) {
            .custom-bg-position {
              background-position: center top -190px !important;
            }
          }
        `}</style>

        {/* Dark overlay only on background */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Text content above overlay */}
        <div className="relative z-10 text-center">
          <h2 className="text-[#d3bb8f] text-[28px] font-mono md:text-[38px] lg:text-[42px] font-rubik-vinyl font-bold pt-2 md:pt-8">
            Company Overview
          </h2>
          <h2 className="text-[#d3bb8f] text-[15px] font-mono md:text-[24px] lg:text-[36px] font-rubik-vinyl font-bold pt-2 md:pt-8">
            <span className="text-white">About</span> / Overview
          </h2>
        </div>
      </div>

      {/* Content */}
      <main className="bg-white text-black font-sans">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/company-overview-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4 uppercase tracking-wide">
              Company Overview
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-[#d3bb8f] font-medium">
              Reliable Aerospace Consumables for Aviation, MRO & Defense.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#d3bb8f] mb-6 uppercase">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>RSR Aviation Services Pvt. Ltd.</strong> is a
              government-registered, ISO-certified company founded in May 2022.
              We specialize in supplying premium aerospace consumables including
              adhesives, sealants, lubricants, paints, coatings, and chemicals
              for aviation, MRO, and defense sectors.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#d3bb8f] mb-3 uppercase">
                Our Mission
              </h3>
              <p>
                To become India's most trusted aerospace supplier by providing
                consistent quality, timely delivery, and unmatched support.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#d3bb8f] mb-3 uppercase">
                Our Vision
              </h3>
              <p>
                To build a globally respected aerospace brand and a trusted name
                in aviation consumables across the globe by 2030.
              </p>
            </div>
          </div>
        </section>

        {/* Authorized Brands */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#d3bb8f] mb-10 uppercase">
              Authorized Distributors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
              <img
                src="/images/brands/akzonobel.png"
                alt="AkzoNobel"
                className="h-16 mx-auto"
              />
              <img
                src="/images/brands/sandstrom.png"
                alt="Sandstrom"
                className="h-16 mx-auto"
              />
              <img
                src="/images/brands/sherwin.png"
                alt="Sherwin"
                className="h-16 mx-auto"
              />
              <img
                src="/images/brands/3chem.png"
                alt="3CHEM"
                className="h-16 mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#d3bb8f] mb-12 uppercase">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="bg-white p-6 shadow-lg border border-[#d3bb8f] rounded-lg">
                <h4 className="text-xl font-semibold mb-2">
                  Certified & Trusted
                </h4>
                <p>
                  We’re ISO-certified and registered with government defense and
                  aviation authorities.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg border border-[#d3bb8f] rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Global Brands</h4>
                <p>
                  We distribute top global brands like AkzoNobel, Sherwin, and
                  Sandstrom in India.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg border border-[#d3bb8f] rounded-lg">
                <h4 className="text-xl font-semibold mb-2">
                  Logistics Expertise
                </h4>
                <p>
                  We provide end-to-end logistics support with prompt
                  documentation and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <footer className="bg-black text-white py-14 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Let's Partner for the Sky
          </h3>
          <p className="mb-6 text-lg text-[#d3bb8f]">
            Reach out to RSR Aviation to streamline your supply chain with
            certified aerospace consumables.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#d3bb8f] text-black px-6 py-3 rounded-full font-medium hover:bg-[#c0aa7e] transition"
          >
            Contact Us
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Facilities;
