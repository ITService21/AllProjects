import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Service data with comprehensive content
const servicesData = [
    {
        id: "funding",
        title: "Funding & Investment Solutions",
        subtitle: "Comprehensive Financial Support for MSMEs",
        icon: "💰",
        description: "Transform your business dreams into reality with our expert funding solutions. We provide end-to-end financial assistance including government grants, equity funding, business loans, and investment connections.",
        features: [
            "Government Grant Applications",
            "Startup India Scheme Benefits",
            "NBFC Business Loans",
            "Angel Investment Connections",
            "Venture Capital Networking",
            "Equity Funding Assistance",
            "Loan Documentation Support",
            "Financial Planning & Strategy"
        ],
        benefits: [
            "Access to ₹50+ Crore funding network",
            "95% success rate in grant applications",
            "Fast-track loan approvals",
            "Expert financial guidance",
            "24/7 support throughout the process"
        ],
        process: [
            "Initial Consultation & Assessment",
            "Documentation & Application Preparation",
            "Lender/Investor Matching",
            "Application Submission & Follow-up",
            "Funding Disbursement Support"
        ],
        pricing: "Starting from ₹15,000",
        duration: "15-45 days",
        link: "/services/funding"
    },
    {
        id: "certificate",
        title: "Certification & Compliance Services",
        subtitle: "Professional Certification Solutions",
        icon: "🏆",
        description: "Enhance your business credibility and compliance with our comprehensive certification services. From MSME registration to quality certifications, we ensure your business meets all regulatory requirements.",
        features: [
            "MSME Registration & Certification",
            "ZED (Zero Defect Zero Effect) Certification",
            "ISO 9001:2015 Quality Management",
            "ISO 14001 Environmental Management",
            "OHSAS 18001 Safety Certification",
            "FSSAI Food License",
            "GST Registration & Compliance",
            "Trade License Applications"
        ],
        benefits: [
            "Fast-track certification process",
            "Expert documentation support",
            "Compliance monitoring",
            "Renewal assistance",
            "Government scheme benefits"
        ],
        process: [
            "Documentation Review",
            "Application Preparation",
            "Submission & Tracking",
            "Audit Support",
            "Certificate Delivery"
        ],
        pricing: "Starting from ₹8,000",
        duration: "7-30 days",
        link: "/services/certificate"
    },
    {
        id: "marketing",
        title: "Digital Marketing & Growth",
        subtitle: "Accelerate Your Business Growth",
        icon: "📈",
        description: "Boost your business visibility and reach with our comprehensive digital marketing services. From SEO to social media, we help MSMEs establish a strong online presence and drive growth.",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Google Ads & PPC Campaigns",
            "Content Marketing & Blogging",
            "Email Marketing Automation",
            "Website Development & Design",
            "Brand Identity & Logo Design",
            "Online Reputation Management"
        ],
        benefits: [
            "Increased online visibility",
            "Higher conversion rates",
            "Cost-effective marketing",
            "Measurable results",
            "Expert campaign management"
        ],
        process: [
            "Business Analysis & Strategy",
            "Campaign Design & Setup",
            "Content Creation & Optimization",
            "Performance Monitoring",
            "Continuous Improvement"
        ],
        pricing: "Starting from ₹12,000/month",
        duration: "Ongoing",
        link: "/services/marketing"
    },
    {
        id: "legal",
        title: "Legal & Compliance Support",
        subtitle: "Comprehensive Legal Solutions",
        icon: "⚖️",
        description: "Navigate complex legal requirements with confidence. Our expert legal team provides comprehensive support for business registration, compliance, contracts, and ongoing legal guidance.",
        features: [
            "Business Registration & Incorporation",
            "Legal Documentation & Contracts",
            "Intellectual Property Protection",
            "Labor Law Compliance",
            "Tax Law Advisory",
            "Dispute Resolution",
            "Legal Audit & Risk Assessment",
            "Ongoing Legal Support"
        ],
        benefits: [
            "Expert legal guidance",
            "Risk mitigation",
            "Compliance assurance",
            "Cost-effective solutions",
            "24/7 legal support"
        ],
        process: [
            "Legal Assessment",
            "Documentation Preparation",
            "Filing & Registration",
            "Compliance Monitoring",
            "Ongoing Support"
        ],
        pricing: "Starting from ₹10,000",
        duration: "5-20 days",
        link: "/services/legal"
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

export default function AllServices({ className = "" }) {
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
                {/* Floating Geometric Shapes */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-16 h-16 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full"
                        animate={{
                            x: [0, 80, -40, 0],
                            y: [0, -60, 30, 0],
                            scale: [0.5, 1, 0.8, 0.5],
                            rotate: [0, 180, 360, 0],
                        }}
                        transition={{
                            duration: 12 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.5,
                        }}
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${25 + i * 10}%`,
                        }}
                    />
                ))}
                
                {/* Animated Lines */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-1 bg-gradient-to-r from-orange-300/30 to-red-300/30"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                        style={{
                            width: `${150 + i * 40}px`,
                            left: `${10 + i * 20}%`,
                            top: `${35 + i * 15}%`,
                            transform: `rotate(${i * 20}deg)`,
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
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Our</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> Comprehensive</span>
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
                        Empowering MSMEs and startups with end-to-end business solutions. From funding to growth, we provide comprehensive support to help your business thrive in today's competitive landscape.
                    </motion.p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial="visible"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={index % 2 === 0 ? slideLeft : slideRight}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                        whileHover={{ 
                            scale: 1.02, 
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
                        
                        {/* Floating Elements */}
                        <motion.div 
                            className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"
                            animate={{ 
                                scale: [1, 1.5, 1],
                                rotate: [0, 180, 360],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        />
                        
                        <div className="relative z-10">
                            {/* Service Icon */}
                            <motion.div 
                                className="text-6xl mb-6"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                            >
                                {service.icon}
                            </motion.div>
                            
                            {/* Service Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                {service.title}
                            </h2>
                            
                            {/* Service Subtitle */}
                            <p className="text-orange-600 font-semibold text-lg mb-4">
                                {service.subtitle}
                            </p>
                            
                            {/* Service Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            
                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {service.features.slice(0, 4).map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-sm text-gray-700"
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
                            
                            {/* Pricing & Duration */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                    <div className="text-sm font-semibold text-orange-600">Starting Price</div>
                                    <div className="text-lg font-bold text-gray-800">{service.pricing}</div>
                                </div>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                    <div className="text-sm font-semibold text-orange-600">Duration</div>
                                    <div className="text-lg font-bold text-gray-800">{service.duration}</div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <motion.a
                                href={service.link}
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(253, 87, 16, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
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

            {/* Why Choose Us Section */}
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
                        Why Choose Our Services?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine expertise, experience, and dedication to deliver exceptional results for your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🎯",
                            title: "Expert Team",
                            description: "15+ years of combined experience in MSME consulting and business development"
                        },
                        {
                            icon: "⚡",
                            title: "Fast Results",
                            description: "Quick turnaround times with 95% success rate in applications and approvals"
                        },
                        {
                            icon: "🤝",
                            title: "24/7 Support",
                            description: "Round-the-clock assistance and guidance throughout your business journey"
                        }
                    ].map((item, index) => (
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
                                {item.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
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
                    {[...Array(4)].map((_, i) => (
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
                                duration: 15 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                            style={{
                                left: `${20 + i * 20}%`,
                                top: `${30 + i * 15}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Join thousands of successful MSMEs who trust us with their growth journey. Get started today with our comprehensive business solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
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
AllServices.propTypes = {
    className: PropTypes.string,
};
