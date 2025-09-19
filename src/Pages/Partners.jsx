import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import PartnerModal from "../Components/PartnerModal";

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

export default function Partners({ className = "" }) {
    const [showPartnerModal, setShowPartnerModal] = useState(false);

    return (
        <section 
            className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >

            {/* Header Section */}
            <motion.div 
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div 
                        className="text-8xl mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        🤝
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Our Strategic
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Partners
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            & Alliances
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Building strong partnerships with government agencies, financial institutions, technology leaders, and industry associations to provide comprehensive support for MSMEs and startups.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Partnership Statistics */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Partnership Network
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our extensive network of partners ensures comprehensive support for your business needs
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {partnershipStats.map((stat, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-gray-600 font-semibold">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Strategic Partners Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Strategic Partners
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Government agencies and institutions supporting MSME development
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {partnersData.strategicPartners.map((partner, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                            <div className="relative z-10">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                    </div>
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
                                            <span
                                                key={serviceIndex}
                                                className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <a
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Technology Partners Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Technology Partners
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Leading technology companies providing cutting-edge solutions and resources
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {partnersData.technologyPartners.map((partner, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center group"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="w-20 h-20 rounded-xl object-cover"
                                />
                            </div>
                            
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
                            
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Financial Partners Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Financial Partners
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Leading banks and financial institutions providing comprehensive banking solutions
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {partnersData.financialPartners.map((partner, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center group"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="w-20 h-20 rounded-xl object-cover"
                                />
                            </div>
                            
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
                            
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Partnership Benefits Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Partnership Benefits
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        How our strategic partnerships benefit your business growth and success
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {partnershipBenefits.map((benefit, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-12 text-center text-white overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="relative z-10">
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Join Our Partner Network
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Become part of our growing network of partners and help us support more MSMEs and startups across India.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <button
                            onClick={() => setShowPartnerModal(true)}
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Become a Partner
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
                        >
                            Call Now: +91 98765 43210
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Partner Modal */}
            <PartnerModal
                open={showPartnerModal}
                onClose={() => setShowPartnerModal(false)}
            />
        </section>
    );
}

// PropTypes
Partners.propTypes = {
    className: PropTypes.string,
};
