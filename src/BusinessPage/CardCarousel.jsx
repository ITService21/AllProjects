import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AutoCardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      title: 'Funding / Loans & Grants',
      description: 'They help MSMEs get financing via loans (NBFC, unsecured business loans, etc.) and grants from government schemes.',
      image: 'https://images.pexels.com/photos/4968656/pexels-photo-4968656.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '💰',
      navigate: '/services/funding',
    },
    {
      id: 2,
      title: 'Certificate & Compliance Consultation',
      description: 'They assist in getting certifications (e.g. MSME Certification, ZED Certification) and handling legal/compliance matters.',
      image: 'https://images.pexels.com/photos/8112130/pexels-photo-8112130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '📜',
      navigate: '/services/certificate',
    },
    {
      id: 3,
      title: 'Business Setup / Registrations',
      description: 'Help with company registrations, setting up the business legally, business structure, etc.',
      image: 'https://images.pexels.com/photos/8423864/pexels-photo-8423864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '🏢',
      navigate: '/services/all',
    },
    {
      id: 4,
      title: 'Marketing Consultation / Digital Marketing',
      description: 'Provide marketing support—digital marketing solutions to help MSMEs grow their reach and business.',
      image: 'https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '📈',
      navigate: '/services/marketing',
    },
    {
      id: 5,
      title: 'Compliance & Legal Support',
      description: 'Comprehensive legal support and compliance management for sustainable business operations.',
      image: 'https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '⚖️',
      navigate: '/services/legal',
    },
    {
      id: 6,
      title: 'Business Growth & Expansion Services',
      description: 'Advisory for business expansion including mergers & acquisitions, business growth programmes, etc.',
      image: 'https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: '🚀',
      navigate: '/services/marketing',
    },
  ];

  // Determine how many cards to show based on screen size
  const getVisibleCardCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 3;      // mobile - show 3 (left preview, center, right preview)
    if (width < 1024) return 3;     // tablet
    return 5;                       // desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCardCount());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCardCount());
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % cardData.length);
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, [cardData.length]);

  const getVisibleCards = () => {
    if (isMobile) {
      // For mobile, show: previous card (partial), current card (full), next card (partial)
      return [
        cardData[(startIndex - 1 + cardData.length) % cardData.length],
        cardData[startIndex],
        cardData[(startIndex + 1) % cardData.length]
      ];
    }
    return Array.from({ length: visibleCards }).map((_, i) => {
      return cardData[(startIndex + i) % cardData.length];
    });
  };

  const visible = getVisibleCards();

  // Navigation functions
  const goToPrevious = () => {
    setStartIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % cardData.length);
      }, 7000);
    }
  };

  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % cardData.length);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % cardData.length);
      }, 7000);
    }
  };

  const goToSlide = (index) => {
    setStartIndex(index);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % cardData.length);
      }, 7000);
    }
  };

  return (
    <div className="mt-[40px] md:mt-[50px] bg-gradient-to-br from-orange-50 to-orange-200 px-4 pt-[40px] pb-16 overflow-hidden relative">
      {/* Background Object Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Mesh Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251,146,60,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(253,87,16,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(251,146,60,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(253,87,16,0.2) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(253,87,16,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(251,146,60,0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Business Icons - Reduced for performance */}
        {[...Array(3)].map((_, i) => {
          const icons = ['💼', '📊', '🎯'];
          return (
            <motion.div
              key={`icon-${i}`}
              className="absolute text-2xl sm:text-3xl opacity-20"
              animate={{
                y: [0, -20, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
            >
              {icons[i % icons.length]}
            </motion.div>
          );
        })}
        
        {/* Floating Hexagons - Reduced for performance */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500/15 to-orange-600/15"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              left: `${30 + i * 40}%`,
              top: `${30 + i * 30}%`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
        
        {/* Floating Stars - Reduced for performance */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500/12 to-orange-600/12"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              left: `${20 + i * 25}%`,
              top: `${40 + i * 15}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
        
        {/* Floating Hearts - Reduced for performance */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10"
            style={{
              clipPath: 'path("M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z")',
              left: `${15 + i * 70}%`,
              top: `${60 + i * 20}%`,
            }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4,
            }}
          />
        ))}
        
        {/* Simple floating elements for performance */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`simple-${i}`}
            className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-orange-500/20 rounded-full"
            style={{
              left: `${25 + i * 50}%`,
              top: `${25 + i * 30}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
        
      </div>

      {/* Compact Header Section */}
      <div className="text-center mb-8 max-w-5xl mx-auto relative z-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/image/logo.png" 
            alt="Grow Startup Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg border-4 border-white/50"
          />
        </div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" 
          style={{color: '#000000', fontFamily: 'Poppins, sans-serif', fontWeight: '600'}}
          animate={{
            scale: [1, 1.02, 1],
            y: [0, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
              color: ['#000000', '#F85710', '#000000']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            Jahan{" "}
          </motion.span>
          <motion.span 
            style={{color: '#F85710', fontWeight: '700'}}
            animate={{
              scale: [1, 1.1, 1],
              textShadow: ['0 0 0px rgba(248,87,16,0)', '0 0 10px rgba(248,87,16,0.3)', '0 0 0px rgba(248,87,16,0)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Soch
          </motion.span>
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
              color: ['#000000', '#F85710', '#000000']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            {" "}Banti Hai{" "}
          </motion.span>
          <motion.span 
            style={{color: '#F85710', fontWeight: '700'}}
            animate={{
              scale: [1, 1.1, 1],
              textShadow: ['0 0 0px rgba(248,87,16,0)', '0 0 10px rgba(248,87,16,0.3)', '0 0 0px rgba(248,87,16,0)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            Business
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4" 
          style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}
          animate={{
            scale: [1, 1.01, 1],
            y: [0, -1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          Comprehensive solutions for business growth and success
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
          {[
            { text: "🚀 Setup", delay: 0, link: "/services/all" },
            { text: "💰 Funding", delay: 0.5, link: "/services/funding" },
            { text: "📜 Compliance", delay: 1, link: "/services/legal" },
            { text: "📈 Growth", delay: 1.5, link: "/services/marketing" },
          ].map((item, index) => (
            <motion.span 
              key={index}
              className="bg-white/90 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm mx-1 sm:mx-2"
              animate={{
                scale: [1, 1.15, 1],
                y: [0, -3, 0],
                boxShadow: [
                  '0 2px 4px rgba(0,0,0,0.1)',
                  '0 8px 20px rgba(248,87,16,0.2)',
                  '0 2px 4px rgba(0,0,0,0.1)'
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }}
            >
              {/* {item.text} */}
              <Link to={item.link} className=""> 
                {item.text}
              </Link>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className={`relative flex justify-center items-center ${isMobile ? '-mx-4' : ''}`}>
        {/* Left Arrow - Hidden on mobile */}
        {!isMobile && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-20 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow - Hidden on mobile */}
        {!isMobile && (
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Cards Container */}
      <div className={`flex ${isMobile ? 'justify-start items-center w-full gap-[8px] h-[420px]' : 'gap-4 sm:gap-6'} transition-all duration-700 ease-in-out`}>
        {visible.map((card, index) => {
          const isCenter = isMobile ? index === 1 : index === Math.floor(visibleCards / 2);
          const isLeftPreview = isMobile && index === 0;
          const isRightPreview = isMobile && index === 2;

          return (
            <div
              key={card.id}
              onClick={() => {
                if (isMobile && isLeftPreview) {
                  goToPrevious();
                } else if (isMobile && isRightPreview) {
                  goToNext();
                }
              }}
              className={`
                  relative group overflow-hidden bg-center bg-cover shadow-2xl 
                  transition-all duration-700 ease-in-out transform border-2 border-white/40 
                  ${isMobile ? 
                    (isCenter ? 
                      'w-[calc(70%-12px)] h-[420px] scale-100 z-10 rounded-3xl opacity-100' : 
                      'w-[15%] h-[320px] scale-95 opacity-100 cursor-pointer rounded-2xl'
                    ) : 
                    'w-[260px] sm:w-[300px] md:w-[280px] lg:w-[320px] xl:w-[340px] h-[380px] sm:h-[420px] md:h-[400px] rounded-3xl'
                  }
                  ${!isMobile && isCenter ? 'scale-110 shadow-3xl z-10 border-white/80 shadow-orange-500/20 animate-float' : ''}
                  ${!isMobile && !isCenter ? 'scale-75 opacity-60 hover:opacity-80' : ''}
                  ${!isMobile ? 'hover:scale-105 hover:shadow-3xl hover:shadow-orange-500/30' : ''}
              `}
              style={{
                backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Blur overlay for side preview cards on mobile - REMOVED */}

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition duration-700"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

                {/* Floating Icon - Hidden on side previews in mobile */}
                {!(isMobile && (isLeftPreview || isRightPreview)) && (
                  <div className="absolute top-6 left-6 text-4xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform hover:rotate-12">
                    {card.icon}
                  </div>
                )}

                {/* Service Badge - Hidden on side previews in mobile */}
                {!(isMobile && (isLeftPreview || isRightPreview)) && (
                  <div className="absolute top-6 right-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-3 py-1 text-xs font-semibold text-white opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    Service
                  </div>
                )}

                {/* Content Container - Hidden on side previews in mobile */}
                {!(isMobile && (isLeftPreview || isRightPreview)) && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-xl transition-all duration-500 transform group-hover:-translate-y-1">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition duration-500 line-clamp-3 mb-4">
                    {card.description}
                  </p>
                  
                  {/* Enhanced Learn More Button - Always Visible */}
                  <div className="opacity-80 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0">
                    <button onClick={() => navigate(card?.navigate)} className="bg-gradient-to-r from-orange-500/70 to-orange-600/70 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Learn More →
                    </button>
                  </div>
              </div>
                )}

                {/* Enhanced Decorative Elements - Hidden on side previews in mobile */}
                {!(isMobile && (isLeftPreview || isRightPreview)) && (
                  <>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-transparent rounded-bl-3xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-tr-3xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition duration-500"></div>
                  </>
                )}
            </div>
          );
        })}
        </div>
      </div>

      {/* Dots Navigation - Below the carousel */}
      <div className="flex justify-center mt-2 space-x-2">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Main dot */}
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === startIndex
                ? 'bg-orange-500 w-8 shadow-md'
                : 'bg-orange-500/30 hover:bg-orange-500/50'
            }`}>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutoCardCarousel;
