import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FormModal from "./FormModal";

export default function AutoPopupModal() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    // Check if user has dismissed popup permanently
    const isPopupDismissed = () => {
        return localStorage.getItem('popupDismissed') === 'true';
    };

    useEffect(() => {
        if (isPopupDismissed()) {
            return;
        }

        const isHomePage = location.pathname === '/' || location.pathname === '/home';
        const initialDelay = isHomePage ? 5000 : 90000; // 5s for home, 90s for others

        console.log(`⏰ Setting up popup: ${isHomePage ? '5 seconds (home)' : '90 seconds (other page)'}`);

        // Initial popup
        const initialTimer = setTimeout(() => {
            console.log('✅ Opening initial popup');
            setShowModal(true);
        }, initialDelay);

        // Recurring popup every 90 seconds
        const recurringInterval = setInterval(() => {
            console.log('✅ Opening recurring popup (90s interval)');
            setShowModal(true);
        }, 90000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(recurringInterval);
        };
    }, [location.pathname]);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleDismissPermanently = () => {
        localStorage.setItem('popupDismissed', 'true');
        setShowModal(false);
    };

    return (
        <FormModal
            open={showModal}
            onClose={handleClose}
            onDismissPermanently={handleDismissPermanently}
        />
    );
}
