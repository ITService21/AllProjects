import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINTS } from "../config/api";
import { SMTP_CONFIG, SMTP_TO_EMAIL } from "../config/smtp";

const SERVICE_SCHEMES = [
    "ARTHA", "SURAKSHA", "NISHTHA", "UTTHAN", "PRAGATI", "DISHA"
];

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceScheme: '',
        subject: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

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
                    subject: "Contact Form Submission",
                    fields: {
                        Name: formData.name,
                        Phone: formData.phone,
                        Email: formData.email,
                        Company: formData.company,
                        "Service Scheme": formData.serviceScheme,
                        Subject: formData.subject,
                        Message: formData.message
                    }
                })
            });
            if (res.ok) {
                toast.success('Message sent successfully! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceScheme: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch {
            toast.error('Failed to send message. Please try again.');
        }
        setSending(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="mt-[80px]" style={{ backgroundColor: '#FFFFFF' }}>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 py-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-20 h-20 bg-white/10 rounded-full"
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -80, 40, 0],
                                scale: [0.5, 1.2, 0.8, 0.5],
                                rotate: [0, 180, 360, 0],
                            }}
                            transition={{
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${25 + i * 10}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10 text-center text-white">
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Connect With Us
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Get in touch with our expert team for comprehensive business solutions
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Contact Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Phone */}
                    <motion.div
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => (window.location.href = "tel:+917383930301")}
                    >
                        <motion.div 
                            className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaPhoneAlt className="text-white text-2xl" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
                        <p className="text-gray-600 mb-4">+91 7383930301</p>
                        <p className="text-sm text-gray-500">Available 24/7 for urgent queries</p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => (window.location.href = "mailto:info@growstartup.com")}
                    >
                        <motion.div 
                            className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaEnvelope className="text-white text-2xl" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
                        <p className="text-gray-600 mb-4">info@growstartup.com</p>
                        <p className="text-sm text-gray-500">We respond within 2 hours</p>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.open("https://www.google.com/maps/search/Gandhinagar+Gujarat")}
                    >
                        <motion.div 
                            className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaMapMarkerAlt className="text-white text-2xl" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Visit Us</h3>
                        <p className="text-gray-600 mb-4">Gandhinagar, Gujarat</p>
                        <p className="text-sm text-gray-500">Schedule a meeting with us</p>
                    </motion.div>
                </div>

                {/* Contact Form and Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        required
                                    />
                        </div>
                        <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        placeholder="Enter your company name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Service Scheme <span className="text-gray-400">(optional)</span>
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {SERVICE_SCHEMES.map(scheme => (
                                        <button
                                            type="button"
                                            key={scheme}
                                            className={`px-3 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
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
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: sending ? 1 : 1.02 }}
                                whileTap={{ scale: sending ? 1 : 0.98 }}
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaClock className="text-white text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                                        <p className="text-gray-600 text-sm">Round-the-clock assistance for all your business needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaWhatsapp className="text-white text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">WhatsApp Support</h4>
                                        <p className="text-gray-600 text-sm">Quick responses via WhatsApp for urgent queries</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-white text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Expert Consultation</h4>
                                        <p className="text-gray-600 text-sm">Free initial consultation with our business experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedin className="text-lg" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaTwitter className="text-lg" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaWhatsapp className="text-lg" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Google Map Embed */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Find Us</h3>
                    <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927.1926174015482!2d72.62794682776466!3d23.176595001110528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bb3619f9fdf%3A0xc4be3eeb15516748!2sThe%20Landmark!5e0!3m2!1sen!2sin!4v1759582347978!5m2!1sen!2sin"
                        width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '20px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                            title="Grow Startup Location"
                    ></iframe>
                </div>
                </motion.div>
            </div>
            <ToastContainer 
                position="top-right" 
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ 
                    zIndex: 99999,
                    top: '20px',
                    right: '20px'
                }}
                toastStyle={{
                    background: '#fff',
                    color: '#333',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }}
            />
        </div>
    );
}

export default ContactUs;
