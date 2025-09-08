import React from "react";
import { motion } from "framer-motion";

function NavigateDetails() {
    alert("More")
}

const Services = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

                {/* Left 1/3 - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                        Our Services
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        What We Provide
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We deliver innovative digital solutions that help businesses grow
                        and achieve success. Explore our services below to see how we can
                        empower your journey.
                    </p>

                    {/* Explore More Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={NavigateDetails}
                        className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-purple-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-purple-700"
                    >
                        Explore More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </motion.button>
                </motion.div>


                {/* Right 2/3 - Two Cards */}
                <div className="md:col-span-2 grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <motion.div
                        className="relative group bg-white rounded-2xl shadow-lg p-8 overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 text-2xl mb-6">
                                💻
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">
                                Web Development
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed">
                                Build scalable, modern, and high-performance web applications tailored
                                to your business needs.
                            </p>

                            <div onClick={NavigateDetails}>
                                explore more
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="relative group bg-white rounded-2xl shadow-lg p-8 overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl mb-6">
                                📱
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">
                                Mobile App Development
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed">
                                Create user-friendly mobile apps that engage customers and
                                deliver seamless digital experiences.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
