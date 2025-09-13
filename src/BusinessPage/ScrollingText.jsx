import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../index.css"; // Import CSS

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
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 py-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-orange-500/20 to-green-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full shadow-2xl border border-orange-400/50">
            <motion.div 
              className="w-3 h-3 bg-white rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            />
            <span className="text-white font-bold text-sm tracking-wide" style={{fontFamily: 'Poppins, sans-serif'}}>
              🔥 LIVE UPDATES
            </span>
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </div>
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
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 shadow-xl">
            <motion.div 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.div>
            <span className="text-white font-bold text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              {items[currentIndex]}
            </span>
            <motion.div 
              className="text-2xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ⭐
            </motion.div>
          </div>
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
                <div className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  <span className="text-white font-semibold text-sm whitespace-nowrap" style={{fontFamily: 'Poppins, sans-serif'}}>
                    {item}
                  </span>
                </div>
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
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-lg"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
