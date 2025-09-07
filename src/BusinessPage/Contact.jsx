import React from "react";

const ContactSection = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Content */}
                <div>
                    <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                        Help Us 24/7
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        What Can We Offer for Your Business
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We are here to support your business with innovative solutions and
                        24/7 assistance. Reach out to us anytime.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li>📍 65 Street, Network City, NYPD</li>
                        <li>📧 support@company.com</li>
                        <li>📞 +1 222 545 55 44</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h3>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your phone"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Enter your message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
