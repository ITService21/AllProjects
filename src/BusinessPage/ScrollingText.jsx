import { motion } from "framer-motion";
import "../index.css"; // Import CSS

const ScrollingText = () => {
  const items = [
    "Government Grants",
    "Equity Based Funding",
    "NBFC Business Loan",
    "Startup India Scheme",
  ];

  const displayText = items.join("   |   ");

  return (
    <div className="w-full flex">
      {/* Left Blue Section */}
      <div className="bg-blue-800 text-white font-bold px-6 py-3 clip-left flex items-center">
        Announcements
      </div>

      {/* Middle Scrolling Section with diagonal edges */}
      <div className="flex-1 overflow-hidden bg-red-600 py-3 clip-middle">
        <motion.div
          className="flex whitespace-nowrap text-white font-medium text-sm sm:text-base md:text-lg tracking-wide"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <span className="px-8">{displayText}</span>
          <span className="px-8">{displayText}</span>
          <span className="px-8">{displayText}</span>
        </motion.div>
      </div>

      {/* Right Blue Section */}
      <div className="bg-blue-800 px-20 py-3 clip-right"></div>
    </div>
  );
};

export default ScrollingText;
