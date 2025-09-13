import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Legal services data
const legalServices = [
    {
        title: "Business Registration & Incorporation",
        description: "Complete business registration and incorporation services for all types of business entities",
        features: [
            "Private Limited Company Registration",
            "LLP (Limited Liability Partnership)",
            "Partnership Firm Registration",
            "Sole Proprietorship Setup",
            "One Person Company (OPC)",
            "Section 8 Company Registration"
        ],
        icon: "🏢",
        duration: "7-15 days",
        price: "₹12,000"
    },
    {
        title: "Legal Documentation & Contracts",
        description: "Comprehensive legal documentation and contract drafting services for business operations",
        features: [
            "Employment Contracts & Agreements",
            "Vendor & Supplier Agreements",
            "Non-Disclosure Agreements (NDA)",
            "Service Level Agreements (SLA)",
            "Partnership Agreements",
            "Franchise Agreements"
        ],
        icon: "📋",
        duration: "3-7 days",
        price: "₹8,000"
    },
    {
        title: "Intellectual Property Protection",
        description: "Protect your business ideas, innovations, and brand with comprehensive IP services",
        features: [
            "Trademark Registration",
            "Copyright Protection",
            "Patent Filing & Registration",
            "Design Registration",
            "IP Portfolio Management",
            "IP Infringement Protection"
        ],
        icon: "🛡️",
        duration: "15-30 days",
        price: "₹15,000"
    },
    {
        title: "Compliance & Regulatory Services",
        description: "Ensure your business meets all legal and regulatory requirements",
        features: [
            "GST Registration & Compliance",
            "Labor Law Compliance",
            "Environmental Compliance",
            "Industry-Specific Regulations",
            "Annual Compliance Filings",
            "Regulatory Advisory Services"
        ],
        icon: "⚖️",
        duration: "5-10 days",
        price: "₹10,000"
    },
    {
        title: "Dispute Resolution & Litigation",
        description: "Expert legal representation and dispute resolution services",
        features: [
            "Commercial Dispute Resolution",
            "Arbitration & Mediation",
            "Court Representation",
            "Legal Notice Drafting",
            "Settlement Negotiations",
            "Recovery Proceedings"
        ],
        icon: "⚔️",
        duration: "Varies",
        price: "₹20,000"
    },
    {
        title: "Legal Audit & Risk Assessment",
        description: "Comprehensive legal audit and risk assessment for business operations",
        features: [
            "Legal Due Diligence",
            "Contract Review & Analysis",
            "Compliance Audit",
            "Risk Assessment Report",
            "Legal Opinion & Advisory",
            "Remedial Action Planning"
        ],
        icon: "🔍",
        duration: "10-20 days",
        price: "₹25,000"
    }
];

// Legal expertise areas
const expertiseAreas = [
    {
        icon: "🏭",
        title: "Corporate Law",
        description: "Complete corporate legal services for businesses of all sizes"
    },
    {
        icon: "💼",
        title: "Commercial Law",
        description: "Commercial transactions, contracts, and business agreements"
    },
    {
        icon: "👥",
        title: "Labor Law",
        description: "Employment law, HR compliance, and labor relations"
    },
    {
        icon: "🏛️",
        title: "Regulatory Law",
        description: "Government regulations, compliance, and regulatory affairs"
    }
];

// Process steps
const processSteps = [
    {
        step: "01",
        title: "Consultation",
        description: "Initial consultation to understand your legal requirements"
    },
    {
        step: "02",
        title: "Documentation",
        description: "Collection and preparation of all necessary documents"
    },
    {
        step: "03",
        title: "Filing",
        description: "Submission of applications and legal filings"
    },
    {
        step: "04",
        title: "Follow-up",
        description: "Tracking progress and handling queries from authorities"
    },
    {
        step: "05",
        title: "Completion",
        description: "Final delivery and ongoing legal support"
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

export default function LegalServices({ className = "" }) {
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
                {/* Floating Legal Icons */}
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
                        ⚖️
                    </motion.div>
                ))}
                
                {/* Animated Geometric Shapes */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className="absolute w-16 h-16 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-lg"
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
                        ⚖️
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Legal &</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> Compliance</span>
                        <br />
                        <span className="text-gray-900">Support</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Navigate complex legal requirements with confidence. Our expert legal team provides comprehensive support for business registration, compliance, contracts, and ongoing legal guidance.
                    </motion.p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {legalServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial="visible"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
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
                                className="text-4xl mb-4"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                            >
                                {service.icon}
                            </motion.div>
                            
                            {/* Service Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            
                            {/* Service Description */}
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                {service.description}
                            </p>
                            
                            {/* Features List */}
                            <div className="space-y-2 mb-4">
                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-xs text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Stats */}
                            <div className="flex gap-2">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 rounded-lg border border-orange-100 flex-1">
                                    <div className="text-xs font-semibold text-orange-600">Duration</div>
                                    <div className="text-sm font-bold text-gray-800">{service.duration}</div>
                                </div>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 rounded-lg border border-orange-100 flex-1">
                                    <div className="text-xs font-semibold text-orange-600">Price</div>
                                    <div className="text-sm font-bold text-gray-800">{service.price}</div>
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

            {/* Expertise Areas Section */}
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
                        Our Legal Expertise
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive legal services across multiple practice areas
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertiseAreas.map((area, index) => (
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
                                {area.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                            <p className="text-gray-600">{area.description}</p>
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
                        Our Legal Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A systematic approach to handling your legal requirements efficiently
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
                        Need Legal Support?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Get expert legal guidance and support for all your business needs. Our experienced legal team is here to help you navigate complex legal requirements with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Legal Consultation
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
LegalServices.propTypes = {
    className: PropTypes.string,
};
