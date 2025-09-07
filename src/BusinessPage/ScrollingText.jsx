import { motion } from "framer-motion";
import text from "../Data/SmallBusinessDetails"; // Accepts string or array
import { div } from "framer-motion/client";

const ScrollingText = () => {
    // Support both string and array
    const displayText = Array.isArray(text) ? text.join(" • ") : text;

    return (
        <div className="w-full flex justify-center">
            <div className="w-4/5 overflow-hidden py-3 bg-indigo-600 border-y border-indigo-800 shadow-inner my-8">
                <motion.div
                    className="flex whitespace-nowrap text-white font-medium text-sm sm:text-base md:text-lg tracking-wide"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    <span className="px-8">{displayText}</span>
                    <span className="px-8">{displayText}</span>
                    <span className="px-8">{displayText}</span>
                </motion.div>
            </div>
        </div>

    );
};

export default ScrollingText;
