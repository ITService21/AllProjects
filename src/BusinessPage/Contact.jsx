import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    // Animation variants for stagger effect
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 px-6 relative overflow-hidden
        bg-gradient-to-r from-purple-100 via-violet-200 to-indigo-100


        ">
            {/* Decorative gradient blobs */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            <motion.div
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Left Content */}
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                    <h3 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-2">
                        Help Us 24/7
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
                        What Can We Offer for Your <span className="text-[#e613df]">Business</span>
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We are here to support your business with innovative solutions and
                        24/7 assistance. Reach out to us anytime and let us help you grow.
                    </p>

                    <ul className="space-y-3 text-gray-800">
                        <li>📍 65 Street, Network City, NYPD</li>
                        <li>📧 support@company.com</li>
                        <li>📞 +1 222 545 55 44</li>
                    </ul>

                </motion.div>

                {/* Contact Form */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 hover:shadow-purple-200/60 transition-shadow duration-500"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h3>
                    <form className="space-y-5">
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your phone"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                            />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }}>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Enter your message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition transform"
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
