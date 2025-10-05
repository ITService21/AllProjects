import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { useModal } from "../Context/ModalContext";
import { API_ENDPOINTS } from "../config/api";
import { SMTP_CONFIG, SMTP_TO_EMAIL } from "../config/smtp";

const SERVICE_SCHEMES = [
    "ARTHA", "SURAKSHA", "NISHTHA", "UTTHAN", "PRAGATI", "DISHA"
];

export default function FormModal({ open, onClose, onDismissPermanently }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceScheme: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const { closeModal } = useModal();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSchemeSelect = (scheme) => {
        setFormData({
            ...formData,
            serviceScheme: scheme
        });
    };

    const isValid = () =>
        formData.name.trim() &&
        formData.email.trim() &&
        formData.phone.trim() &&
        formData.message.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid()) {
            toast.error('Please fill all required fields.');
            return;
        }
        setSending(true);
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    smtp: SMTP_CONFIG,
                    to: SMTP_TO_EMAIL,
                    subject: "Consultant Booking Request",
                    fields: {
                        Name: formData.name,
                        Phone: formData.phone,
                        Email: formData.email,
                        Company: formData.company,
                        "Service Scheme": formData.serviceScheme,
                        Message: formData.message
                    }
                })
            });
            if (res.ok) {
                toast.success('Request sent! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceScheme: '',
                    message: ''
                });
                // Close modal after successful submission
                setTimeout(() => {
                    closeModal();
                    onClose();
                }, 2000);
            } else { 
                toast.error('Failed to send request. Please try again.');
            }
        } catch {
            toast.error('Failed to send request. Please try again.');
        }
        setSending(false);
    };

    // Modal animation
    const modalVariants = {
        hidden: { opacity: 0, y: -40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }
    };

    if (!open) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
            >
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ border: "2px solid #F85710" }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => {
                            closeModal();
                            onClose();
                        }}
                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    
                    {/* Don't Show Again Button - Only for auto popup */}
                    {onDismissPermanently && (
                        <button
                            onClick={onDismissPermanently}
                            className="absolute top-3 left-3 text-xs text-gray-400 hover:text-orange-500 underline"
                            aria-label="Don't show again"
                        >
                            Don&apos;t show again
                        </button>
                    )}
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center" style={{ color: "#F85710" }}>
                        Book a Consultant
                    </h2>
                    <p className="text-xs text-gray-500 text-center mb-4">
                        Fill the form or call us directly for instant support.
                    </p>
                    {/* Direct Call Option */}
                    <div className="flex items-center justify-center mb-4">
                        <a
                            href="tel:+917383930301"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-sm shadow hover:scale-105 transition"
                        >
                            <FaPhoneAlt /> Call Now: +91 7383930301
                        </a>
                    </div>
                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:border-orange-500 text-xs"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:border-orange-500 text-xs"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:border-orange-500 text-xs"
                                placeholder="Your Phone"
                            />
                        </div>
                        {/* <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Company <span className="text-gray-400">(optional)</span>
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:border-orange-500 text-xs"
                                placeholder="Company Name"
                            />
                        </div> */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Service Scheme <span className="text-gray-400">(optional)</span>
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {SERVICE_SCHEMES.map(scheme => (
                                    <button
                                        type="button"
                                        key={scheme}
                                        className={`px-2 py-1 rounded-full border-2 font-semibold text-xs transition-all duration-200 ${
                                            formData.serviceScheme === scheme
                                                ? 'bg-orange-500 text-white border-orange-500'
                                                : 'bg-white text-orange-700 border-orange-300 hover:bg-orange-50'
                                        }`}
                                        onClick={() => handleSchemeSelect(scheme)}
                                    >
                                        {scheme}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={3}
                                className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:border-orange-500 text-xs resize-none"
                                placeholder="Your Message"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            disabled={sending}
                            className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow hover:scale-105 transition-all duration-200 text-sm"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {sending ? "Sending..." : "Send Request"}
                        </motion.button>
                    </form>
                    <ToastContainer position="top-right" autoClose={3000} />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// PropTypes
FormModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDismissPermanently: PropTypes.func
};