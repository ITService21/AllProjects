import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    experience: 0,
    projects: 0,
    certifications: 0
  });
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (target, key) => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      };

      animateCount(500, 'clients');
      animateCount(15, 'experience');
      animateCount(1000, 'projects');
      animateCount(50, 'certifications');
    }
  }, [isInView]);

  const services = [
    {
      icon: "🚀",
      title: "Business Incorporation & Registration",
      description: "Transform your vision into reality with seamless company formation and legal compliance",
      link: "/services/all"
    },
    {
      icon: "💰",
      title: "Seed Funding & Loan Assistance",
      description: "Unlock financial opportunities and secure the capital your business needs to thrive",
      link: "/services/funding"
    },
    {
      icon: "🏆",
      title: "Startup India & MSME Certification",
      description: "Achieve government recognition and unlock exclusive benefits for your enterprise",
      link: "/services/certificate"
    },
    {
      icon: "📈",
      title: "Business Growth Strategy",
      description: "Accelerate your success with proven strategies and expert guidance for scaling",
      link: "/services/marketing"
    }
  ];


  return (
    <div className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* New Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, 
                rgba(253, 87, 16, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 25%, 
                rgba(253, 87, 16, 0.1) 50%, 
                rgba(255, 255, 255, 0.05) 75%, 
                rgba(253, 87, 16, 0.1) 100%)`,
              backgroundSize: '400% 400%'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Floating Hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 opacity-20"
            style={{
              background: `linear-gradient(45deg, #F85710, #FF6B35)`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section with Scroll Animation */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl flex gap-[10px] md:gap-[14px] lg:gap-[18px] text-normal md:text-6xl lg:text-7xl font-black mb-6 relative" style={{fontFamily: 'Montserrat, sans-serif'}}>
              <motion.span 
                className="text-gray-800 block"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                About
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  scale: [1, 1.1, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}
              >
                Us
              </motion.span>
            </h2>
 
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-bold" style={{fontFamily: 'Inter, sans-serif'}}>
              <span className="relative">
                We are an 
                <motion.span 
                  className="text-orange-600 font-black mx-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1,
                    textShadow: [
                      '0 0 0px rgba(253, 87, 16, 0)',
                      '0 0 20px rgba(253, 87, 16, 0.5)',
                      '0 0 0px rgba(253, 87, 16, 0)'
                    ]
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.4,
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  Gandhinagar
                </motion.span>
                based consultancy
              </span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Committed to growth and essential business services
              </span>
            </p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal" 
              style={{fontFamily: 'Inter, sans-serif'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              From launching startups to scaling established businesses, we serve entrepreneurs at every stage.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Services Grid with Scroll Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -120 : 120,
                  y: 30
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
              {/* Animated Background - Only Background Changes */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                initial={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)',
                    'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(253,87,16,0.03) 50%, rgba(255,255,255,1) 100%)',
                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated Border Effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                initial={{ 
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, transparent) border-box'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box',
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(255,107,53,0.3), rgba(253,87,16,0.3)) border-box',
                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10" onClick={() => navigate(service.link)}>
                {/* Icon - No Color Change on Hover */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-2xl relative"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Content - No Color Change on Hover */}
                <h3 
                  className="text-xl font-black mb-4 leading-tight" 
                  style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}
                >
                  {service.title}
                  {/* <Link to={service.link}>
                    {service.title}
                  </Link> */}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed text-sm" 
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  {service.description}
                </p>
              </div>
              
              {/* Animated Decorative Elements - Only Background Effects */}
              <motion.div 
                className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5 + 1
                }}
              />
              
              {/* Animated Corner Accents */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl"
                initial={{ 
                  background: 'linear-gradient(135deg, transparent 0%, transparent 100%)'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(135deg, rgba(253,87,16,0.1) 0%, transparent 100%)',
                    'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, transparent 100%)',
                    'linear-gradient(135deg, rgba(253,87,16,0.1) 0%, transparent 100%)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl"
                initial={{ 
                  background: 'linear-gradient(315deg, transparent 0%, transparent 100%)'
                }}
                whileHover={{ 
                  background: [
                    'linear-gradient(315deg, rgba(255,107,53,0.1) 0%, transparent 100%)',
                    'linear-gradient(315deg, rgba(253,87,16,0.1) 0%, transparent 100%)',
                    'linear-gradient(315deg, rgba(255,107,53,0.1) 0%, transparent 100%)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats Section with Scroll Animation */}
        <motion.div 
          ref={statsRef}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{backgroundColor: '#111827'}}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, amount: 0.2 }}
         >
          {/* Enhanced Background Effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse"></div>
          
          <div className="relative z-10">
            <h3 
              className="text-4xl md:text-5xl font-black text-white mb-6" 
              style={{fontFamily: 'Montserrat, sans-serif'}}
            >
              <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Gandhinagar&apos;s Premier MSME Consultancy
              </span>
            </h3>
            
            <p 
              className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto font-medium" 
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              Based in Gandhinagar, we&apos;re your trusted partner for business growth and success
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { key: 'clients', number: 500, suffix: '+', label: "Happy Clients" },
                { key: 'experience', number: 5, suffix: '+', label: "Years Experience" },
                { key: 'projects', number: 1000, suffix: '+', label: "Projects Completed" },
                { key: 'certifications', number: 50, suffix: '+', label: "Certifications" }
              ].map((stat, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                  <motion.div 
                    className="text-4xl md:text-5xl font-black mb-3 relative" 
                    style={{color: '#F85710', fontFamily: 'Montserrat, sans-serif'}}
                    animate={{
                      textShadow: isInView ? [
                        '0 0 0px rgba(253, 87, 16, 0)',
                        '0 0 20px rgba(253, 87, 16, 0.5)',
                        '0 0 0px rgba(253, 87, 16, 0)'
                      ] : '0 0 0px rgba(253, 87, 16, 0)'
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {counts[stat.key]}{stat.suffix}
                  </motion.div>
                  
                  <div 
                    className="text-gray-300 text-sm font-medium uppercase tracking-wider" 
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    {stat.label}
                  </div>
                  
                  {/* Static Underline */}
                  <div 
                    className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-2 group-hover:w-full transition-all duration-500"
                  />
                </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
