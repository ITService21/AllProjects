import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            className="bg-cover bg-center h-screen relative"
            style={{ backgroundImage: "url('/image/charter.jpg')" }}
        >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <motion.div
                    className="text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Experience Luxury in the Skies
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Private Jet Charters Tailored to Your Needs
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
                    >
                        Book Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
