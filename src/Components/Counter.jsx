import React, { useState, useEffect, useRef } from 'react';

const ScrollCounter = ({ targetNumber = 100, duration = 3000, className = 'counter' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  // Function to update the counter value
  const updateCounter = () => {
    let current = 0;
    const increment = targetNumber / (duration / 10); // Calculate increment per frame

    const interval = setInterval(() => {
      if (current < targetNumber) {
        current += increment;
        setCount(Math.round(current)); // Round to avoid decimals
      } else {
        setCount(targetNumber);
        clearInterval(interval);
      }
    }, 10); // Speed of counting (in milliseconds)
  };

  const resetCounter = () => {
    setCount(0); // Reset the counter to zero
  };

  // Intersection observer to detect when the counter is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter(); // Start counting when in view
        } else {
          resetCounter(); // Reset counter when out of view
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetNumber, duration]);

  return (
    <div ref={counterRef} className={className}>
      {count}+
    </div>
  );
};

export default ScrollCounter;
