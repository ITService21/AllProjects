import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Partners data with comprehensive content
const partnersData = {
    strategicPartners: [
        {
            id: 1,
            name: "Government of India",
            category: "Government Agency",
            logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop",
            description: "Official partner for Startup India and MSME schemes",
            services: ["Startup India Registration", "MSME Certification", "Government Grants", "Policy Support"],
            established: "2016",
            location: "New Delhi, India",
            website: "https://startupindia.gov.in"
        },
        {
            id: 2,
            name: "SIDBI (Small Industries Development Bank of India)",
            category: "Financial Institution",
            logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop",
            description: "Leading development bank supporting MSMEs with financial solutions",
            services: ["Business Loans", "Working Capital", "Equipment Financing", "Credit Guarantee"],
            established: "1990",
            location: "Lucknow, India",
            website: "https://sidbi.in"
        },
        {
            id: 3,
            name: "NSIC (National Small Industries Corporation)",
            category: "Government Corporation",
            logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop",
            description: "Supporting small industries with technology, marketing, and finance",
            services: ["Technology Transfer", "Marketing Support", "Raw Material Assistance", "Export Promotion"],
            established: "1955",
            location: "New Delhi, India",
            website: "https://nsic.co.in"
        },
        {
            id: 4,
            name: "CII (Confederation of Indian Industry)",
            category: "Industry Association",
            logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
            description: "Premier business association promoting industrial development",
            services: ["Policy Advocacy", "Business Networking", "Skill Development", "Export Promotion"],
            established: "1895",
            location: "New Delhi, India",
            website: "https://cii.in"
        }
    ],
    technologyPartners: [
        {
            id: 5,
            name: "Microsoft for Startups",
            category: "Technology Partner",
            logo: "https://images.unsplash.com/photo-1633419466719-5b4b4b4b4b4b?w=200&h=200&fit=crop",
            description: "Empowering startups with cloud technology and business support",
            services: ["Azure Credits", "Technical Mentorship", "Go-to-Market Support", "Developer Tools"],
            established: "2018",
            location: "Redmond, USA",
            website: "https://startups.microsoft.com"
        },
        {
            id: 6,
            name: "Google for Startups",
            category: "Technology Partner",
            logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=200&fit=crop",
            description: "Supporting startups with Google's technology and resources",
            services: ["Google Cloud Credits", "Ad Grants", "Technical Training", "Mentorship"],
            established: "2011",
            location: "Mountain View, USA",
            website: "https://startup.google.com"
        },
        {
            id: 7,
            name: "AWS Activate",
            category: "Cloud Technology",
            logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop",
            description: "Amazon's program providing startups with cloud resources",
            services: ["AWS Credits", "Technical Support", "Training Resources", "Business Support"],
            established: "2013",
            location: "Seattle, USA",
            website: "https://aws.amazon.com/activate"
        }
    ],
    financialPartners: [
        {
            id: 8,
            name: "HDFC Bank",
            category: "Banking Partner",
            logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop",
            description: "Leading private sector bank supporting MSMEs",
            services: ["Business Banking", "Working Capital Loans", "Trade Finance", "Digital Banking"],
            established: "1994",
            location: "Mumbai, India",
            website: "https://hdfcbank.com"
        },
        {
            id: 9,
            name: "ICICI Bank",
            category: "Banking Partner",
            logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop",
            description: "Comprehensive banking solutions for businesses",
            services: ["MSME Loans", "Current Accounts", "Payment Solutions", "Investment Banking"],
            established: "1994",
            location: "Mumbai, India",
            website: "https://icicibank.com"
        },
        {
            id: 10,
            name: "Axis Bank",
            category: "Banking Partner",
            logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
            description: "Digital-first banking solutions for modern businesses",
            services: ["Business Loans", "Digital Banking", "Trade Services", "Wealth Management"],
            established: "1993",
            location: "Mumbai, India",
            website: "https://axisbank.com"
        }
    ],
    certificationPartners: [
        {
            id: 11,
            name: "Bureau of Indian Standards (BIS)",
            category: "Certification Body",
            logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop",
            description: "National standards body ensuring quality and safety",
            services: ["Product Certification", "Quality Standards", "Testing Services", "Compliance"],
            established: "1986",
            location: "New Delhi, India",
            website: "https://bis.gov.in"
        },
        {
            id: 12,
            name: "Quality Council of India (QCI)",
            category: "Quality Assurance",
            logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop",
            description: "Promoting quality standards across industries",
            services: ["ISO Certification", "Quality Training", "Accreditation", "Consulting"],
            established: "1997",
            location: "New Delhi, India",
            website: "https://qcin.org"
        }
    ]
};

// Partnership benefits
const partnershipBenefits = [
    {
        icon: "🤝",
        title: "Strategic Alliances",
        description: "Strong partnerships with government agencies, financial institutions, and technology leaders"
    },
    {
        icon: "💰",
        title: "Financial Support",
        description: "Access to funding, loans, and financial assistance through our banking partners"
    },
    {
        icon: "🏆",
        title: "Quality Assurance",
        description: "Certification and quality standards through recognized certification bodies"
    },
    {
        icon: "🚀",
        title: "Technology Access",
        description: "Cutting-edge technology and cloud resources from leading tech partners"
    },
    {
        icon: "📈",
        title: "Growth Opportunities",
        description: "Business development and expansion support through industry associations"
    },
    {
        icon: "🌍",
        title: "Global Reach",
        description: "International partnerships for export and global market access"
    }
];

// Partnership statistics
const partnershipStats = [
    { number: "50+", label: "Strategic Partners" },
    { number: "15+", label: "Government Agencies" },
    { number: "25+", label: "Financial Institutions" },
    { number: "10+", label: "Technology Partners" },
    { number: "100%", label: "Partner Satisfaction" },
    { number: "24/7", label: "Partner Support" }
];

// Custom hook for visibility
const useAlwaysVisible = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return isVisible;
};

export default function Partners({ className = "" }) {
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
            className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Partnership Icons */}
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
                        🤝
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
                        🤝
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Our Strategic</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> Partners</span>
                        <br />
                        <span className="text-gray-900">& Alliances</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Building strong partnerships with government agencies, financial institutions, technology leaders, and industry associations to provide comprehensive support for MSMEs and startups.
                    </motion.p>
                </motion.div>
            </div>

            {/* Partnership Statistics */}
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
                        Partnership Network
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our extensive network of partners ensures comprehensive support for your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {partnershipStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
                        >
                            <motion.div 
                                className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-2"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-gray-600 font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Strategic Partners Section */}
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
                        Strategic Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Government agencies and institutions supporting MSME development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {partnersData.strategicPartners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={index % 2 === 0 ? slideLeft : slideRight}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
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
                            
                            <div className="relative z-10">
                                <div className="flex items-start gap-6 mb-6">
                                    <motion.div 
                                        className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                                        <p className="text-orange-600 font-semibold mb-2">{partner.category}</p>
                                        <p className="text-gray-600 text-sm">{partner.description}</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                        <div className="text-sm font-semibold text-orange-600">Established</div>
                                        <div className="text-lg font-bold text-gray-800">{partner.established}</div>
                                    </div>
                                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                        <div className="text-sm font-semibold text-orange-600">Location</div>
                                        <div className="text-lg font-bold text-gray-800">{partner.location}</div>
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Services Offered:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {partner.services.map((service, serviceIndex) => (
                                            <motion.span
                                                key={serviceIndex}
                                                className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                            >
                                                {service}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                
                                <motion.a
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(253, 87, 16, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Visit Website
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
            </div>

            {/* Technology Partners Section */}
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
                        Technology Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Leading technology companies providing cutting-edge solutions and resources
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partnersData.technologyPartners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center group"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { 
                                    duration: 0.3, 
                                    ease: [0.68, -0.55, 0.265, 1.55]
                                }
                            }}
                        >
                            <motion.div 
                                className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="w-20 h-20 rounded-xl object-cover"
                                />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{partner.name}</h3>
                            <p className="text-orange-600 font-semibold mb-3">{partner.category}</p>
                            <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                            
                            <div className="space-y-2 mb-6">
                                {partner.services.slice(0, 3).map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="text-sm text-gray-700">
                                        • {service}
                                    </div>
                                ))}
                            </div>
                            
                            <motion.a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Financial Partners Section */}
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
                        Financial Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Leading banks and financial institutions providing comprehensive banking solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partnersData.financialPartners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial="visible"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center group"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { 
                                    duration: 0.3, 
                                    ease: [0.68, -0.55, 0.265, 1.55]
                                }
                            }}
                        >
                            <motion.div 
                                className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="w-20 h-20 rounded-xl object-cover"
                                />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{partner.name}</h3>
                            <p className="text-orange-600 font-semibold mb-3">{partner.category}</p>
                            <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                            
                            <div className="space-y-2 mb-6">
                                {partner.services.slice(0, 3).map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="text-sm text-gray-700">
                                        • {service}
                                    </div>
                                ))}
                            </div>
                            
                            <motion.a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Partnership Benefits Section */}
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
                        Partnership Benefits
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        How our strategic partnerships benefit your business growth and success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partnershipBenefits.map((benefit, index) => (
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
                                x: [0, 80, -40, 0],
                                y: [0, -60, 30, 0],
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
                        Join Our Partner Network
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Become part of our growing network of partners and help us support more MSMEs and startups across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Become a Partner
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
Partners.propTypes = {
    className: PropTypes.string,
};
