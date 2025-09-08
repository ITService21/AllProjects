import React, { useEffect, useRef, useState } from 'react';

const AutoCardCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);
    const intervalRef = useRef(null);

    const cardData = [
        { id: 1, title: '🚀 Launch', description: 'Prepare for takeoff!' },
        { id: 2, title: '📦 Package', description: 'Shipping your product.' },
        { id: 3, title: '💡 Idea', description: 'Innovate your workflow.' },
        { id: 4, title: '🎯 Target', description: 'Focus on goals.' },
        { id: 5, title: '📈 Growth', description: 'Grow your audience.' },
        { id: 6, title: '🔒 Secure', description: 'Your data is safe.' },
    ];

    // Detect screen size to adjust visible cards
    const getVisibleCardCount = () => {
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        return 3; // desktop
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

    // Get visible cards, looped
    const getVisibleCards = () => {
        return Array.from({ length: visibleCards }).map((_, i) => {
            return cardData[(startIndex + i) % cardData.length];
        });
    };

    const visible = getVisibleCards();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4">
            <div className="flex gap-4 sm:gap-6 transition-all duration-700 ease-in-out">
                {visible.map((card, index) => {
                    const isCenter = index === Math.floor(visibleCards / 2); // dynamically find center

                    return (
                        <div
                            key={card.id}
                            className={`
                w-[250px] sm:w-[280px] md:w-[300px] h-[360px] sm:h-[400px] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center 
                transition-all duration-700 ease-in-out transform border border-gray-200
                ${isCenter
                                    ? 'scale-110 shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white'
                                    : 'scale-90 opacity-70 bg-white text-gray-800'
                                }
              `}
                        >
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{card.title}</h2>
                            <p className="text-sm sm:text-base">{card.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AutoCardCarousel;
