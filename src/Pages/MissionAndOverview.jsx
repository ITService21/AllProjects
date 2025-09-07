import React from "react";
import AboutAlternatingCards from "./AboutAlternatingCards";

function MissionAndOverview() {
    return (
        <div className="bg-gradient-to-b from-[#f0ece1] to-[#ebe7de] py-16 px-4 md:px-16 lg:px-24">
            <h2 className="text-[#9d7914] text-3xl md:text-4xl lg:text-5xl font-bold font-rubik-vinyl text-center mb-12">
                Our Mission & Overview
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="bg-[#d8bd71] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                    <h3 className="text-xl md:text-2xl font-cinzel font-bold text-[#4b3600] mb-4">
                        Our Mission
                    </h3>
                    <p className="text-md md:text-lg text-[#222222] leading-relaxed font-cinzel">
                        At RSR Aviation Services Pvt. Ltd., our mission is to deliver
                        world-class aviation support, logistics, and distribution solutions
                        with unmatched precision and professionalism. We strive to ensure
                        safety, reliability, and excellence in every service we provide,
                        empowering the aviation industry with quality and efficiency.
                    </p>
                </div>

                {/* Overview */}
                <div className="bg-[#d8bd71] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                    <h3 className="text-xl md:text-2xl font-cinzel font-bold text-[#4b3600] mb-4">
                        Company Overview
                    </h3>
                    <p className="text-md md:text-lg text-[#222222] leading-relaxed font-cinzel">
                        RSR Aviation Services Pvt. Ltd. is a trusted partner in the aviation
                        sector, offering specialized solutions in the distribution of
                        aerospace parts, ground support equipment, and aviation-grade
                        consumables. With a dedicated team, modern infrastructure, and
                        commitment to industry standards, we cater to both private and
                        governmental aviation needs across India and globally.
                    </p>
                </div>
            </div>
            <AboutAlternatingCards/>
        </div>
    );
}

export default MissionAndOverview;
