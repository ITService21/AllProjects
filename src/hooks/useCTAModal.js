import { useState, useRef } from 'react';

export const useCTAModal = () => {
    const [showFormModal, setShowFormModal] = useState(false);
    // const [hasTriggeredModal, setHasTriggeredModal] = useState(false);
    // const [hasScrolledFromTop, setHasScrolledFromTop] = useState(false);
    const ctaRef = useRef(null);

    const resetModal = () => {
        setShowFormModal(false);
        // setHasTriggeredModal(false);
        // setHasScrolledFromTop(false);
    };

    // Disabled: Track if user has scrolled from top
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) { // User has scrolled down at least 100px
    //             setHasScrolledFromTop(true);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
        
    //     // Check initial scroll position
    //     handleScroll();

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // Disabled: Reset scroll state when component mounts (page navigation)
    // useEffect(() => {
    //     setHasScrolledFromTop(false);
    //     setHasTriggeredModal(false);
    // }, []);

    // Disabled: Auto-opening FormModal when CTA section is visible
    // useEffect(() => {
    //     if (!ctaRef.current || hasTriggeredModal || !hasScrolledFromTop) return;

    //     const currentRef = ctaRef.current;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting && !hasTriggeredModal && hasScrolledFromTop) {
    //                     console.log('🎯 CTA section is visible and user has scrolled from top - opening FormModal');
    //                     setShowFormModal(true);
    //                     setHasTriggeredModal(true);
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.3, // Trigger when 30% of the element is visible
    //             rootMargin: '0px 0px -50px 0px' // Trigger a bit before it's fully visible
    //         }
    //     );

    //     observer.observe(currentRef);

    //     return () => {
    //         if (currentRef) {
    //             observer.unobserve(currentRef);
    //         }
    //     };
    // }, [hasTriggeredModal, hasScrolledFromTop]);

    return {
        showFormModal,
        setShowFormModal,
        ctaRef,
        resetModal
    };
};
