import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../index.css";

const ScrollingText = () => {
  const items = [
    "Government Grants",
    "Equity Based Funding",
    "NBFC Business Loan",
    "Startup India Scheme",
    "MSME Certification",
    "ZED Certification",
    "Business Registration",
    "Digital Marketing",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-[#111827] via-gray-800 to-[#111827] py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#F85710]/20 via-orange-500/20 to-[#F85710]/20"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F85710] rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Glow Effect */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F85710] to-[#ff6b35] px-6 py-3 rounded-full shadow-2xl border border-[#F85710]/50"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span
              className="text-white font-bold text-sm tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              🔥 LIVE UPDATES
            </span>
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Featured Item */}
        <motion.div
          className="text-center mb-6"
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(253, 87, 16, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.div>
            <motion.span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(253, 87, 16, 0)",
                  "0 0 10px rgba(253, 87, 16, 0.5)",
                  "0 0 0px rgba(253, 87, 16, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {items[currentIndex]}
            </motion.span>
            <motion.div
              className="text-2xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ⭐
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scrolling Text with Enhanced Effects */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...items, ...items, ...items].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mx-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(253, 87, 16, 0.3)",
                    borderColor: "rgba(253, 87, 16, 0.5)",
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-[#F85710] to-[#ff6b35] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <span
                    className="text-white font-semibold text-sm whitespace-nowrap"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Glow Effect */}
        <motion.div
          className="flex justify-center mt-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#F85710] to-transparent rounded-full shadow-lg"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollingText;
