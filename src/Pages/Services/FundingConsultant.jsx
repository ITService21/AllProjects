import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Funding services data
const fundingServices = [
    {
        title: "Government Grant Applications",
        description: "Access various government schemes and grants designed specifically for MSMEs and startups",
        features: [
            "Startup India Seed Fund Scheme",
            "MUDRA Loan Applications",
            "Stand-Up India Scheme",
            "Credit Guarantee Fund Scheme",
            "Technology Upgradation Fund",
            "Export Promotion Schemes"
        ],
        icon: "🏛️",
        duration: "15-30 days",
        successRate: "95%"
    },
    {
        title: "Business Loan Assistance",
        description: "Secure business loans from leading NBFCs and banks with competitive interest rates",
        features: [
            "Unsecured Business Loans",
            "Working Capital Finance",
            "Equipment Financing",
            "Invoice Discounting",
            "Term Loans",
            "Line of Credit"
        ],
        icon: "🏦",
        duration: "7-21 days",
        successRate: "90%"
    },
    {
        title: "Investment Connections",
        description: "Connect with angel investors, VCs, and funding networks for equity investments",
        features: [
            "Angel Investor Network",
            "Venture Capital Connections",
            "Private Equity Funding",
            "Crowdfunding Platforms",
            "Strategic Partnerships",
            "IPO Preparation"
        ],
        icon: "💼",
        duration: "30-90 days",
        successRate: "85%"
    },
    {
        title: "Financial Planning",
        description: "Comprehensive financial planning and strategy development for sustainable growth",
        features: [
            "Business Plan Development",
            "Financial Projections",
            "Cash Flow Management",
            "Investment Strategy",
            "Risk Assessment",
            "Growth Planning"
        ],
        icon: "📊",
        duration: "10-20 days",
        successRate: "100%"
    }
];

// Success stories
const successStories = [
    {
        company: "TechStart Innovations",
        industry: "Technology",
        funding: "₹2.5 Crores",
        type: "Series A",
        story: "Helped secure Series A funding from leading VC firm within 60 days of application"
    },
    {
        company: "GreenEnergy Solutions",
        industry: "Renewable Energy",
        funding: "₹50 Lakhs",
        type: "Government Grant",
        story: "Successfully obtained government grant for clean energy technology development"
    },
    {
        company: "AgriTech Ventures",
        industry: "Agriculture",
        funding: "₹1.2 Crores",
        type: "Angel Investment",
        story: "Connected with angel investors and secured funding for agricultural technology platform"
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

export default function FundingConsultant({ className = "" }) {
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
                {/* Floating Money Icons */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl opacity-10"
                        animate={{
                            x: [0, 100, -50, 0],
                            y: [0, -80, 40, 0],
                            rotate: [0, 360, -360, 0],
                            scale: [0.5, 1.2, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2,
                        }}
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                        }}
                    >
                        💰
                    </motion.div>
                ))}
                
                {/* Animated Lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-1 bg-gradient-to-r from-orange-300/40 to-red-300/40"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                        style={{
                            width: `${200 + i * 50}px`,
                            left: `${5 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            transform: `rotate(${i * 15}deg)`,
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
                        💰
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Funding &</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> Investment</span>
                        <br />
                        <span className="text-gray-900">Solutions</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Transform your business dreams into reality with our expert funding solutions. We provide comprehensive financial assistance including government grants, equity funding, business loans, and investment connections.
                    </motion.p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {fundingServices.map((service, index) => (
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
                                    <div className="text-sm font-semibold text-orange-600">Success Rate</div>
                                    <div className="text-lg font-bold text-gray-800">{service.successRate}</div>
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

            {/* Success Stories Section */}
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
                        Success Stories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Real businesses, real results. See how we've helped MSMEs secure funding and grow their operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {story.company.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.company}</h3>
                                <p className="text-orange-600 font-semibold mb-2">{story.industry}</p>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg mb-4">
                                    <div className="text-2xl font-bold text-gray-800">{story.funding}</div>
                                    <div className="text-sm text-orange-600">{story.type}</div>
                                </div>
                                <p className="text-gray-600 text-sm">{story.story}</p>
                            </div>
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
                        Our Funding Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A systematic approach to securing the right funding for your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {[
                        { step: "01", title: "Assessment", description: "Evaluate your business needs and funding requirements" },
                        { step: "02", title: "Strategy", description: "Develop customized funding strategy and approach" },
                        { step: "03", title: "Preparation", description: "Prepare all necessary documents and applications" },
                        { step: "04", title: "Submission", description: "Submit applications and connect with funders" },
                        { step: "05", title: "Follow-up", description: "Track progress and ensure successful funding" }
                    ].map((process, index) => (
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
                                {process.step}
                            </motion.div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h3>
                            <p className="text-gray-600 text-sm">{process.description}</p>
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
                                duration: 18 + i * 2,
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
                
                <div className="relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to Secure Your Funding?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Let our expert team help you navigate the funding landscape and secure the capital your business needs to grow and succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Funding Consultation
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
FundingConsultant.propTypes = {
    className: PropTypes.string,
};
