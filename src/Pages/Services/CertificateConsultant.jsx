import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Certificate services data
const certificateServices = [
    {
        title: "MSME Registration & Certification",
        description: "Complete MSME registration and certification services for micro, small, and medium enterprises",
        features: [
            "Udyam Registration (MSME)",
            "Udyog Aadhaar Registration",
            "MSME Certificate Generation",
            "Registration Renewal Services",
            "Documentation Support",
            "Status Tracking & Updates"
        ],
        icon: "🏢",
        duration: "7-15 days",
        price: "₹8,000"
    },
    {
        title: "Quality Management Certifications",
        description: "ISO and quality management system certifications to enhance business credibility",
        features: [
            "ISO 9001:2015 Quality Management",
            "ISO 14001 Environmental Management",
            "ISO 45001 Occupational Health & Safety",
            "ISO 27001 Information Security",
            "ISO 22000 Food Safety Management",
            "IATF 16949 Automotive Quality"
        ],
        icon: "🏆",
        duration: "30-60 days",
        price: "₹25,000"
    },
    {
        title: "Industry-Specific Certifications",
        description: "Specialized certifications for various industries and business sectors",
        features: [
            "FSSAI Food License",
            "Drug License (Manufacturing)",
            "BIS Certification",
            "CE Marking",
            "Hallmark Certification",
            "Agmark Certification"
        ],
        icon: "🎯",
        duration: "15-45 days",
        price: "₹15,000"
    },
    {
        title: "ZED Certification",
        description: "Zero Defect Zero Effect certification for manufacturing excellence",
        features: [
            "ZED Assessment & Application",
            "Quality Improvement Planning",
            "Environmental Impact Assessment",
            "Process Optimization",
            "Certification Maintenance",
            "Renewal Support"
        ],
        icon: "🌱",
        duration: "45-90 days",
        price: "₹20,000"
    }
];

// Certification benefits
const certificationBenefits = [
    {
        icon: "📈",
        title: "Business Growth",
        description: "Increase market credibility and access to government tenders"
    },
    {
        icon: "💰",
        title: "Financial Benefits",
        description: "Access to lower interest rates and government subsidies"
    },
    {
        icon: "🌍",
        title: "Global Recognition",
        description: "Enhance international business opportunities and partnerships"
    },
    {
        icon: "⚡",
        title: "Operational Efficiency",
        description: "Improve processes and reduce waste through quality systems"
    }
];

// Process steps
const processSteps = [
    {
        step: "01",
        title: "Documentation",
        description: "Collect and prepare all required documents and information"
    },
    {
        step: "02",
        title: "Application",
        description: "Submit application with proper documentation and fees"
    },
    {
        step: "03",
        title: "Review",
        description: "Authorities review application and may request additional information"
    },
    {
        step: "04",
        title: "Inspection",
        description: "On-site inspection and audit by certification body"
    },
    {
        step: "05",
        title: "Certification",
        description: "Receive certificate upon successful completion of all requirements"
    }
];

// Custom hook for visibility
const useAlwaysVisible = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return isVisible;
};

export default function CertificateConsultant({ className = "" }) {
    const alwaysVisible = useAlwaysVisible();

    // Animation variants
    const fadeUp = { 
        visible: { opacity: 1, y: 0 }
    };
    const slideLeft = { 
        visible: { opacity: 1, x: 0 }
    };
    const slideRight = { 
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Certificate Icons */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-5xl opacity-10"
                        animate={{
                            x: [0, 80, -40, 0],
                            y: [0, -60, 30, 0],
                            rotate: [0, 360, -360, 0],
                            scale: [0.5, 1.2, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 18 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2,
                        }}
                        style={{
                            left: `${12 + i * 15}%`,
                            top: `${25 + i * 10}%`,
                        }}
                    >
                        🏆
                    </motion.div>
                ))}
                
                {/* Animated Geometric Shapes */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className="absolute w-12 h-12 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-lg"
                        animate={{
                            x: [0, 60, -30, 0],
                            y: [0, -40, 20, 0],
                            rotate: [0, 180, 360, 0],
                            scale: [0.5, 1, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.5,
                        }}
                        style={{
                            left: `${8 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                        }}
                    />
                ))}
            </div>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-16">
                <motion.div
                    initial="visible"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-8xl mb-6"
                        animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        🏆
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Certificate &</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> Compliance</span>
                        <br />
                        <span className="text-gray-900">Services</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Enhance your business credibility and compliance with our comprehensive certification services. From MSME registration to quality certifications, we ensure your business meets all regulatory requirements.
                    </motion.p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {certificateServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial="visible"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={index % 2 === 0 ? slideLeft : slideRight}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { 
                                duration: 0.3, 
                                ease: [0.68, -0.55, 0.265, 1.55]
                            }
                        }}
                    >
                        {/* Animated Background */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 opacity-0 group-hover:opacity-100"
                            animate={{
                                background: [
                                    "linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(253,87,16,0.05) 100%)",
                                    "linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(253,87,16,0.03) 50%, rgba(255,107,53,0.05) 100%)",
                                    "linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(253,87,16,0.05) 100%)"
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <div className="relative z-10">
                            {/* Service Icon */}
                            <motion.div 
                                className="text-5xl mb-6"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                            >
                                {service.icon}
                            </motion.div>
                            
                            {/* Service Title */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            
                            {/* Service Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            
                            {/* Features List */}
                            <div className="space-y-3 mb-6">
                                {service.features.map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        className="flex items-center gap-3 text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Stats */}
                            <div className="flex gap-4">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                    <div className="text-sm font-semibold text-orange-600">Duration</div>
                                    <div className="text-lg font-bold text-gray-800">{service.duration}</div>
                                </div>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                    <div className="text-sm font-semibold text-orange-600">Starting Price</div>
                                    <div className="text-lg font-bold text-gray-800">{service.price}</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Border */}
                        <motion.div 
                            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Benefits Section */}
            <div className="relative z-10 mb-16">
                <motion.div
                    initial="visible"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Benefits of Certification
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Certification brings numerous advantages to your business, from improved credibility to better market access
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificationBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100"
                        >
                            <motion.div 
                                className="text-4xl mb-4"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                            >
                                {benefit.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="relative z-10 mb-16">
                <motion.div
                    initial="visible"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Certification Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our systematic approach ensures smooth certification process from start to finish
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <motion.div 
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold"
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            >
                                {step.step}
                            </motion.div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                initial="visible"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-12 text-center text-white overflow-hidden"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-24 h-24 bg-white/10 rounded-full"
                            animate={{
                                x: [0, 80, -40, 0],
                                y: [0, -60, 30, 0],
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
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Get Your Business Certified Today
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Enhance your business credibility and unlock new opportunities with our comprehensive certification services. Our expert team will guide you through every step of the process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Certification Process
                        </motion.a>
                        <motion.a
                            href="tel:+919876543210"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "#F85710" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Call Now: +91 98765 43210
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// PropTypes
CertificateConsultant.propTypes = {
    className: PropTypes.string,
};
