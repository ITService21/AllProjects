import React from "react";
import {motion} from "framer-motion";

import AwardPage from "./AwardPage";
import VisionMission from "./Vision&Mission";
import ContactSection from "./Contact";

const BusinessPage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white text-gray-800">
            {/* Awards & Recognition */}
            <AwardPage />
            <VisionMission/>
            <ContactSection/>


            {/* Team Section */}
            <section className="py-20  bg-[#edebeb] px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                    👥 Meet Our Team
                </h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {["Founder", "Director", "CTO"].map((role, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src="./image/award.jpg"
                                alt={role}
                                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-100 shadow-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Name Here
                            </h3>
                            <p className="text-gray-600">{role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BusinessPage;
