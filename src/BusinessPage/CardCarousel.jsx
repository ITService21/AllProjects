import { useEffect, useRef, useState } from 'react';

const AutoCardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: 'Funding / Loans & Grants',
      description: 'They help MSMEs get financing via loans (NBFC, unsecured business loans, etc.) and grants from government schemes.',
      image: './image/marketing_consultant.jpg',
      icon: '💰',
    },
    {
      id: 2,
      title: 'Certificate & Compliance Consultation',
      description: 'They assist in getting certifications (e.g. MSME Certification, ZED Certification) and handling legal/compliance matters.',
      image: './image/certificate.jpg',
      icon: '📜',
    },
    {
      id: 3,
      title: 'Business Setup / Registrations',
      description: 'Help with company registrations, setting up the business legally, business structure, etc.',
      image: './image/funding.jpg',
      icon: '🏢',
    },
    {
      id: 4,
      title: 'Marketing Consultation / Digital Marketing',
      description: 'Provide marketing support—digital marketing solutions to help MSMEs grow their reach and business.',
      image: './image/buisness_setup.jpg',
      icon: '📈',
    },
    {
      id: 5,
      title: 'Business Growth & Expansion Services',
      description: 'Advisory for business expansion including mergers & acquisitions, business growth programmes, etc.',
      image: './image/buisness_growth.jpg',
      icon: '🚀',
    },
    {
      id: 6,
      title: 'Compliance & Legal Support',
      description: 'Comprehensive legal support and compliance management for sustainable business operations.',
      image: './image/slide6.jpg',
      icon: '⚖️',
    },
  ];

  // Determine how many cards to show based on screen size
  const getVisibleCardCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;      // mobile
    if (width < 1024) return 3;     // tablet
    return 5;                       // desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCardCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCardCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [cardData.length]);

  const getVisibleCards = () => {
    return Array.from({ length: visibleCards }).map((_, i) => {
      return cardData[(startIndex + i) % cardData.length];
    });
  };

  const visible = getVisibleCards();

  return (
    <div className="mt-[40px] md:mt-[70px] bg-gradient-to-br from-gray-100 to-blue-300 px-4 pt-[100px] pb-20">
      {/* Compact Header Section */}
      <div className="text-center mb-8 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" style={{color: '#000000', fontFamily: 'Poppins, sans-serif', fontWeight: '600'}}>
          Empowering <span style={{color: '#F85710', fontWeight: '700'}}>MSMEs</span> for Success
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}>
          Comprehensive solutions for business growth and success
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-600">
          <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm">🚀 Setup</span>
          <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm">💰 Funding</span>
          <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm">📜 Compliance</span>
          <span className="bg-white/90 px-3 py-1 rounded-full shadow-sm">📈 Growth</span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center">
        <div className="flex gap-4 sm:gap-6 transition-all duration-700 ease-in-out">
        {visible.map((card, index) => {
          const isCenter = index === Math.floor(visibleCards / 2);

          return (
            <div
              key={card.id}
              className={`
                relative group overflow-hidden rounded-3xl bg-center bg-cover shadow-2xl 
                transition-all duration-700 ease-in-out transform border-2 border-white/40 
                w-[260px] sm:w-[300px] md:w-[280px] lg:w-[320px] xl:w-[340px] h-[380px] sm:h-[420px] md:h-[400px]
                ${isCenter ? 'scale-110 shadow-3xl z-10 border-white/80 shadow-orange-500/20 animate-float' : 'scale-75 opacity-60 hover:opacity-80'}
                hover:scale-105 hover:shadow-3xl hover:shadow-orange-500/30
              `}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition duration-700"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

              {/* Floating Icon */}
              <div className="absolute top-6 left-6 text-4xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform hover:rotate-12">
                {card.icon}
              </div>

              {/* Service Badge */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                Service
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-xl transition-all duration-500 transform group-hover:-translate-y-1">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition duration-500 line-clamp-3 mb-4">
                  {card.description}
                </p>
                
                {/* Enhanced Learn More Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-gradient-to-r from-orange-500/80 to-orange-600/80 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default AutoCardCarousel;
