import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useModal } from "../Context/ModalContext";
import FormModal from "./FormModal";

export default function AutoPopupModal() {
    const [showModal, setShowModal] = useState(false);
    const [hasShownInitialPopup, setHasShownInitialPopup] = useState(false);
    const { openModal, closeModal, isAnyModalOpen } = useModal();
    const location = useLocation();
    const intervalRef = useRef(null);

    // Check if user has dismissed popup permanently
    const isPopupDismissed = () => {
        return localStorage.getItem('popupDismissed') === 'true';
    };

    // Check if we're on the home page
    const isHomePage = () => {
        return location.pathname === '/' || location.pathname === '/home';
    };

    // Initial popup effect - runs only once per page visit
    useEffect(() => {
        // Don't show popup if user has dismissed it permanently
        if (isPopupDismissed()) {
            console.log('❌ Popup dismissed permanently - not showing');
            return;
        }

        // Don't show popup if another modal is already open
        if (isAnyModalOpen) {
            console.log('❌ Another modal is open - not showing popup');
            return;
        }

        // Don't show if already shown on this page
        if (hasShownInitialPopup) {
            return;
        }

        let timer;

        if (isHomePage()) {
            // Show popup after 5 seconds on home page
            console.log('🏠 Home page detected - popup will show in 5 seconds');
            timer = setTimeout(() => {
                if (!isPopupDismissed() && !isAnyModalOpen && !hasShownInitialPopup) {
                    console.log('🚀 Showing popup on home page');
                    setShowModal(true);
                    openModal();
                    setHasShownInitialPopup(true);
                }
            }, 15000); // 5 seconds for home page
        } else {
            // Show popup after 60 seconds on other pages
            console.log(`📄 Other page detected (${location.pathname}) - popup will show in 60 seconds`);
            timer = setTimeout(() => {
                if (!isPopupDismissed() && !isAnyModalOpen && !hasShownInitialPopup) {
                    console.log('🚀 Showing popup on other page');
                    setShowModal(true);
                    openModal();
                    setHasShownInitialPopup(true);
                }
            }, 90000); // 60 seconds for other pages
        }

        return () => clearTimeout(timer);
    }, [location.pathname, isAnyModalOpen, openModal, hasShownInitialPopup]);

    // Recurring popup effect - runs every 60 seconds
    useEffect(() => {
        if (isPopupDismissed()) {
            return;
        }

        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Set up new interval for recurring popups every 90 seconds
        intervalRef.current = setInterval(() => {
            if (!isPopupDismissed() && !isAnyModalOpen) {
                console.log('⏰ Interval popup triggered');
                setShowModal(true);
                openModal();
            }
        }, 90000); // 90 seconds

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAnyModalOpen, openModal]);

    // Reset hasShownInitialPopup when page changes
    useEffect(() => {
        setHasShownInitialPopup(false);
    }, [location.pathname]);

    const handleClose = () => {
        setShowModal(false);
        closeModal();
    };

    const handleDismissPermanently = () => {
        localStorage.setItem('popupDismissed', 'true');
        handleClose();
    };

    // Don't render if popup is dismissed permanently
    if (isPopupDismissed()) {
        return null;
    }

    return (
        <FormModal
            open={showModal}
            onClose={handleClose}
            onDismissPermanently={handleDismissPermanently}
        />
    );
}
