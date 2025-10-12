import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Mobile-optimized floating particles
export const FloatingParticles = ({ count = 15 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-[#F85710] to-[#ff6b35] rounded-full opacity-40 md:opacity-60"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${20 + (i * 5) % 60}%`,
          }}
        />
      ))}
    </div>
  );
};

// Mobile-optimized gradient orbs
export const GradientOrbs = () => {
  return (
    <>
      {/* Large background orb */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F85710]/20 to-[#ff6b35]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Medium orb */}
      <motion.div 
        className="absolute -bottom-40 -left-40 w-60 h-60 bg-gradient-to-tr from-[#F85710]/15 to-[#ff6b35]/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Small floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-[#F85710]/20 to-[#ff6b35]/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

// Mobile-optimized geometric shapes
export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
          style={{
            width: `${20 + i * 5}px`,
            height: `${20 + i * 5}px`,
            background: i % 2 === 0 
              ? "linear-gradient(45deg, #F85710, #ff6b35)" 
              : "linear-gradient(45deg, #111827, #374151)",
            borderRadius: i % 3 === 0 ? "50%" : "20%",
            left: `${5 + i * 12}%`,
            top: `${10 + (i * 8) % 70}%`,
          }}
        />
      ))}
    </div>
  );
};

// Mobile-optimized dot pattern background
export const DotPattern = () => (
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: `radial-gradient(circle, #F85710 1px, transparent 1px)`,
      backgroundSize: "30px 30px"
    }}
  />
);

// Mobile-optimized wave animation
export const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full"
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-full"
          style={{ fill: "rgba(253, 87, 16, 0.1)" }}
        >
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1200,30 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </motion.div>
    </div>
  );
};

// Mobile-optimized card hover effects
export const CardHoverEffect = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.2001 }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized text reveal animation
export const TextReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.2004, 
          delay: delay,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized button animation
export const AnimatedButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(253, 87, 16, 0.3)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.2001 }
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Mobile-optimized section reveal
export const SectionReveal = ({ children, className = "" }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
};

// Mobile-optimized image reveal
export const ImageReveal = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.2004,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized counter animation
export const AnimatedCounter = ({ end, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.2001 }
      }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {count}
    </motion.span>
  );
};

// Mobile-optimized loading animation
export const LoadingAnimation = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-8 h-8 border-4 border-[#F85710] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

// Mobile-optimized pulse animation
export const PulseAnimation = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized slide in animation
export const SlideIn = ({ children, direction = "left", className = "" }) => {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: { 
          duration: 0.2004,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized stagger animation
export const StaggerContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized stagger item
export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.2001 }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// PropTypes
FloatingParticles.propTypes = {
  count: PropTypes.number,
};

CardHoverEffect.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TextReveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

AnimatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ImageReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

PulseAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SlideIn.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  className: PropTypes.string,
};

StaggerContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

StaggerItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default {
  FloatingParticles,
  GradientOrbs,
  GeometricShapes,
  DotPattern,
  WaveAnimation,
  CardHoverEffect,
  TextReveal,
  AnimatedButton,
  SectionReveal,
  ImageReveal,
  AnimatedCounter,
  LoadingAnimation,
  PulseAnimation,
  SlideIn,
  StaggerContainer,
  StaggerItem,
};