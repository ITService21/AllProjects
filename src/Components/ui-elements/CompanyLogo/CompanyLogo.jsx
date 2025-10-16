import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center group">
      {/* Logo Container - 85% of header height on mobile */}
      <div className="relative mr-3 sm:mr-4">
        {/* Circular Logo - Responsive sizing */}
        <motion.div 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-[70px] xl:h-[70px] rounded-full overflow-hidden border-2 border-orange-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.2004 }
          }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(251, 146, 60, 0.3)",
              "0 8px 30px rgba(251, 146, 60, 0.5)",
              "0 4px 20px rgba(251, 146, 60, 0.3)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img 
            src="/image/logo.png" 
            className="w-full h-full object-cover" 
            alt="Grow Startup Logo"
          />
        </motion.div>
        
        {/* Animated Orange Ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-300 group-hover:scale-110"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing Glow Effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-orange-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated Text Container */}
      <motion.div 
        className="text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Company Name with Advanced Animation */}
        <motion.h1 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight"
          whileHover={{ 
            scale: 1.05,
            color: "#fb923c"
          }}
          animate={{
            textShadow: [
              "0 0 0px rgba(251, 146, 60, 0)",
              "0 0 10px rgba(251, 146, 60, 0.3)",
              "0 0 0px rgba(251, 146, 60, 0)"
            ]
          }}
          transition={{
            textShadow: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #fb923c, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Grow Startup
          </motion.span>
        </motion.h1>
        
        {/* Slogan with Wave Animation */}
        <motion.p 
          className="text-[9px] sm:text-[11px] md:text-xs text-orange-400 font-medium tracking-wide group-hover:text-orange-300 transition-colors duration-300 leading-tight"
          whileHover={{ 
            scale: 1.02,
            color: "#fb923c"
          }}
          animate={{
            y: [0, -2, 0]
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.span
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Growing Together Always
          </motion.span>
        </motion.p>
      </motion.div>
    </Link>
  );
};
