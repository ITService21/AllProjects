import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Contact } from "lucide-react";

function ContactUs() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative bg-[url('/image/slide2A.jpg')] bg-contain bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[300px] 
                bg-[center_top_-10px] md:bg-[center_top_-160px] lg:bg-[center_top_-190px] bg-no-repeat bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
            >
                <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-[#d3bb8f] text-[28px] md:text-[38px] lg:text-[42px] font-rubik-vinyl font-bold pt-2 md:pt-8">
                        Connect Us
                    </h2>
                    <h2 className="text-[#d3bb8f] text-[14px] md:text-[19px] lg:text-[20px] font-rubik-vinyl font-bold pt-2 md:pt-8">
                        <span className="text-white">About</span> / Overview
                    </h2>
                </div>
            </div>

            {/* Contact Cards Section */}
            <div className="pb-[80px] bg-gradient-to-b from-[#ffefc4] to-[#ffeaaf]">
                <h1 className="text-[#9d7914] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
                    Connect With Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-10 mt-4">
                    {/* Phone */}
                    <div
                        className="flex flex-col items-center justify-center shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#dcbb61] transition-shadow cursor-pointer bg-[#d8bd71] pt-10 pb-12"
                        onClick={() => (window.location.href = "tel:+919582406531")}
                    >
                        <div className="m-4 flex">
                            <FaPhoneAlt className="text-[#d8bd71] rounded-[20px] bg-[#ffefc4] w-[120px] h-[120px] p-6" />
                        </div>
                        <div>
                            <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center text-[#000000]">
                                Contact Number
                            </div>
                            <p className="font-cinzel text-[18px] text-center text-[#000000]">
                                +91 95824 06531
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div
                        className="flex flex-col items-center justify-center shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#dcbb61] transition-shadow cursor-pointer bg-[#d8bd71] pt-10 pb-12"
                        onClick={() => (window.location.href = "mailto:admin@rsr.com")}
                    >
                        <div className="m-4 flex">
                            <FaEnvelope className="text-[#d8bd71] rounded-[20px] bg-[#ffefc4] w-[120px] h-[120px] p-6" />
                        </div>
                        <div>
                            <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                                Email Us
                            </div>
                            <p className="font-cinzel text-[18px] text-center">
                                companymail@rsr.com
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div
                        className="flex flex-col items-center justify-center shadow-lg rounded-[10px] hover:shadow-xl hover:bg-[#dcbb61] transition-shadow cursor-pointer bg-[#d8bd71] pt-10 pb-12"
                        onClick={() =>
                            window.open("https://www.google.com/maps/place/RSR+AVIATION+SERVICES+PVT+LTD")
                        }
                    >
                        <div className="m-4 flex">
                            <FaMapMarkerAlt className="text-[#d8bd71] rounded-[20px] bg-[#ffefc4] w-[120px] h-[120px] p-6" />
                        </div>
                        <div>
                            <div className="font-bold font-cinzel text-[20px] mb-3 mt-5 text-center">
                                Location
                            </div>
                            <p className="font-cinzel text-[18px] text-center px-4 md:px-6">
                                Navde, Taloja, Navi Mumbai, Maharashtra 410208
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Map Embed */}
                <div className="w-auto h-[300px] md:h-[400px] lg:h-[500px] mx-2 md:mx-8 lg:mx-10 my-6 md:my-12 lg:my-16 border-8 md:border-[25px] border-[#d8bd71]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.190150458803!2d73.119027!3d19.059557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d7f525cad1%3A0x2049828996a93ba0!2sRSR%20AVIATION%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1746992185569!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RS Aviation Location"
                    ></iframe>
                </div>

                
            </div>
        </div>
    );
}

export default ContactUs;
