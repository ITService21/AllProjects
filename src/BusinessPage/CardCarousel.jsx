import React, { useEffect, useRef, useState } from 'react';

const AutoCardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: '🚀 Launch',
      description: 'Prepare for takeoff!',
      image: 'https://source.unsplash.com/random/800x600?startup',
    },
    {
      id: 2,
      title: '📦 Package',
      description: 'Shipping your product.',
      image: 'https://source.unsplash.com/random/800x600?box',
    },
    {
      id: 3,
      title: '💡 Idea',
      description: 'Innovate your workflow.',
      image: 'https://source.unsplash.com/random/800x600?lightbulb',
    },
    {
      id: 4,
      title: '🎯 Target',
      description: 'Focus on goals.',
      image: 'https://source.unsplash.com/random/800x600?target',
    },
    {
      id: 5,
      title: '📈 Growth',
      description: 'Grow your audience.',
      image: 'https://source.unsplash.com/random/800x600?growth',
    },
    {
      id: 6,
      title: '🔒 Secure',
      description: 'Your data is safe.',
      image: 'https://source.unsplash.com/random/800x600?security',
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4 pt-[60px]">
      <div className="flex gap-4 sm:gap-6 transition-all duration-700 ease-in-out">
        {visible.map((card, index) => {
          const isCenter = index === Math.floor(visibleCards / 2);

          return (
            <div
              key={card.id}
              className={`
                relative group overflow-hidden rounded-2xl bg-center bg-cover shadow-lg 
                transition-transform duration-700 ease-in-out transform border border-gray-200 
                w-[250px] sm:w-[280px] md:w-[220px] lg:w-[220px] xl:w-[240px] h-[340px] sm:h-[400px]
                ${isCenter ? 'scale-110 shadow-2xl z-10' : 'scale-95 opacity-80'}
              `}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-500"></div>

              {/* Content (hidden until hover) */}
              <div className="absolute bottom-[-100%] group-hover:bottom-6 left-0 right-0 px-4 py-4 text-white transition-all duration-500 ease-in-out">
                <h2 className="text-xl font-bold mb-1">{card.title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AutoCardCarousel;
