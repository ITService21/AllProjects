import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

const SERVICE_SCHEMES = [
    "ARTHA", "SURAKSHA", "NISHTHA", "UTTHAN", "PRAGATI", "DISHA"
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceScheme: '',
        message: ''
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
            alert('Please fill in all required fields.');
            return;
        }
        
        try {
            const res = await fetch('http://194.164.150.8:5000/send-form-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    smtp: {
                        host: "mail.piwebtechnology.com",
                        port: 587,
                        secure: false,
                        user: "admin@piwebtechnology.com",
                        pass: "751821@Ss"
                    },
                    to: "admin@piwebtechnology.com",
                    subject: "Contact Form Submission",
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
                toast.success('Message sent successfully! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceScheme: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch {
            alert('Failed to send message. Please try again.');
        }
    };

    // Removed heavy animation variants for better mobile performance

    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Unique Animated Background */}
            <div className="absolute inset-0">
                {/* Animated Mesh Background */}
                <motion.div
                    className="absolute inset-0 opacity-8"
                    animate={{
                        background: [
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 75% 25%, rgba(255, 107, 53, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(253, 87, 16, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Simple floating elements for performance */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-6 h-6 bg-orange-500/20 rounded-full"
                        style={{
                            left: `${20 + i * 60}%`,
                            top: `${30 + i * 40}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            delay: i * 3,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Animated Dots Pattern */}
                <motion.div 
                    className="absolute inset-0 opacity-5"
                    animate={{
                        backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(253, 87, 16, 0.3) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />


            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Fast Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                    >
                        <motion.span 
                            className="text-gray-800 block"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Get In
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Touch
                        </motion.span>
                    </h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{fontFamily: 'Inter, sans-serif'}}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
                    </motion.p>
                </motion.div>

            <motion.div
                className="grid lg:grid-cols-2 gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {/* Left Content - Slides from Left */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -120, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-black mb-6" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                Let&apos;s Build Something 
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Amazing</span>
                    </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
                                We&apos;re here to support your business journey with comprehensive solutions, 
                                expert guidance, and 24/7 assistance. Reach out to us and let&apos;s create 
                                something extraordinary together.
                            </p>
                        </motion.div>

                                {/* Contact Information Cards - Smaller & More Animated */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        {
                                            icon: "📍",
                                            title: "Location",
                                            details: ["Ahmedabad, Gujarat"],
                                            color: "from-orange-500 to-red-500"
                                        },
                                        {
                                            icon: "📧",
                                            title: "Email",
                                            details: ["info@company.com"],
                                            color: "from-red-500 to-pink-500"
                                        },
                                        {
                                            icon: "📞",
                                            title: "Call",
                                            details: ["+91 98765 43210"],
                                            color: "from-pink-500 to-orange-500"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                                            whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <div className="relative z-10 text-center">
                                                <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white text-lg shadow-lg mx-auto mb-3`}>
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-xs text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Helpful Information Section */}
                                <motion.div
                                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    {[
                                        {
                                            icon: "🕐",
                                            title: "24/7 Available",
                                            description: "Round the clock support"
                                        },
                                        {
                                            icon: "⚡",
                                            title: "Quick Response",
                                            description: "Within 2 hours"
                                        },
                                        {
                                            icon: "🎯",
                                            title: "Expert Guidance",
                                            description: "Professional consultation"
                                        },
                                        {
                                            icon: "🔒",
                                            title: "Secure & Private",
                                            description: "Your data is safe"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 hover:border-orange-200 transition-all duration-300 group"
                                            whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <div className="text-center">
                                                <div className="text-2xl mb-2">
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Additional Information */}
                                <motion.div
                                    className="mt-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-6 border border-gray-200"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                🌟 Why Choose Us?
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Free initial consultation
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Experienced team of experts
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Customized solutions
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Proven track record
                                                </li>
                    </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                📞 Get Started Today
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                                                Ready to take your business to the next level? Contact us now for a free consultation and let&apos;s discuss your requirements.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">
                                                    Free Consultation
                                                </span>
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                                                    Quick Response
                                                </span>
                                                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-semibold">
                                                    Expert Support
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                </motion.div>

                {/* Contact Form - Slides from Right */}
                <motion.div
                    className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                    initial={{ opacity: 0, x: 120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.01, y: -3, transition: { duration: 0.3 } }}
                >
                    <div className="relative z-10">
                        <motion.h3 
                            className="text-2xl md:text-3xl font-black mb-8" 
                            style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Send Us a Message
                        </motion.h3>
                            
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                        {[
                                            { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                                            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                                            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
                                            { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Enter your company name' }
                                        ].map((field, index) => (
                                            <motion.div
                                                key={field.name}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                                                    {field.label}
                            </label>
                            <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:ring-0 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-orange-50 shadow-sm focus:shadow-lg"
                            />
                        </motion.div>
                                        ))}

                                        {/* Service Scheme Field */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.9 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
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
                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 1.0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                                Message
                            </label>
                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project or requirements..."
                                rows="4"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:ring-0 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-orange-50 shadow-sm focus:shadow-lg resize-none"
                                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-lg"
                            style={{fontFamily: 'Inter, sans-serif'}}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Send Message →
                        </motion.button>
                    </form>
                        </div>
                    </motion.div>
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
        </section>
    );
};

export default ContactSection;
