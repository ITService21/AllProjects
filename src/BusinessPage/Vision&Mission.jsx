import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function VisionMission() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-16 bg-blue-900/50 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 overflow-hidden">
            {/* Vision */}
            <motion.div
                initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
                className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-blue-900">
                    Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    To be a leading force in innovation, driving progress and creating
                    opportunities for businesses worldwide.
                </p>
            </motion.div>

            {/* Mission */}
            <motion.div
                initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ amount: 0.2 }}
                className="bg-gradient-to-r from-green-100 to-green-200 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-green-900">
                    Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Empower startups and enterprises by providing innovative solutions
                    that enhance growth, sustainability, and impact.
                </p>
            </motion.div>
        </section>
    );
}

export default VisionMission;
