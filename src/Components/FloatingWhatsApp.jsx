import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import FormModal from "./FormModal";
import { useModal } from "../Context/ModalContext";

export default function FloatingWhatsApp() {
    const [showFormModal, setShowFormModal] = useState(false);
    const { isAnyModalOpen, openModal, closeModal } = useModal();

    const handleFormModalOpen = () => {
        if (!isAnyModalOpen) {
            openModal();
            setShowFormModal(true);
        }
    };

    const handleFormModalClose = () => {
        closeModal();
        setShowFormModal(false);
    };

    return (
        <>
            {/* Floating WhatsApp Icon - Left - Always Visible */}
            <motion.a
                href="https://wa.me/917383930301"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaWhatsapp className="text-2xl" />
            </motion.a>

            {/* Book Consultant Button - Right - Always Visible */}
            <motion.button
                onClick={handleFormModalOpen}
                className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-base rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -3, 0]
                }}
                transition={{ 
                    duration: 0.3, 
                    delay: 0,
                    y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Water Bubble Effect */}
                <div className="absolute inset-0 rounded-full">
                    {/* Bubble 1 */}
                    <motion.div
                        className="absolute w-3 h-3 bg-white/20 rounded-full"
                        animate={{
                            x: [0, 20, -15, 0],
                            y: [0, -25, -10, 0],
                            scale: [0.5, 1, 0.8, 0.5],
                            opacity: [0, 0.6, 0.3, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0,
                        }}
                        style={{
                            left: "20%",
                            top: "30%",
                        }}
                    />
                    
                    {/* Bubble 2 */}
                    <motion.div
                        className="absolute w-2 h-2 bg-white/15 rounded-full"
                        animate={{
                            x: [0, -18, 12, 0],
                            y: [0, -20, -15, 0],
                            scale: [0.3, 0.8, 0.6, 0.3],
                            opacity: [0, 0.4, 0.2, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                        style={{
                            left: "70%",
                            top: "40%",
                        }}
                    />
                    
                    {/* Bubble 3 */}
                    <motion.div
                        className="absolute w-2.5 h-2.5 bg-white/25 rounded-full"
                        animate={{
                            x: [0, 15, -10, 0],
                            y: [0, -30, -20, 0],
                            scale: [0.4, 0.9, 0.7, 0.4],
                            opacity: [0, 0.5, 0.25, 0],
                        }}
                        transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                        }}
                        style={{
                            left: "50%",
                            top: "20%",
                        }}
                    />
                    
                    {/* Bubble 4 */}
                    <motion.div
                        className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
                        animate={{
                            x: [0, -12, 8, 0],
                            y: [0, -18, -12, 0],
                            scale: [0.2, 0.6, 0.4, 0.2],
                            opacity: [0, 0.3, 0.15, 0],
                        }}
                        transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2.2,
                        }}
                        style={{
                            left: "30%",
                            top: "60%",
                        }}
                    />
                </div>
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2 text-white">
                    📞 Book Consultant
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        →
                    </motion.span>
                </span>
            </motion.button>

            {/* Form Modal */}
            <FormModal 
                open={showFormModal} 
                onClose={handleFormModalClose} 
            />
        </>
    );
}
