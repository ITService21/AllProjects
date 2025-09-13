import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Marketing services data
const marketingServices = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's visibility and ranking on search engines to drive organic traffic",
        features: [
            "Keyword Research & Analysis",
            "On-Page SEO Optimization",
            "Technical SEO Audits",
            "Local SEO Services",
            "Content Optimization",
            "Link Building Strategies"
        ],
        icon: "🔍",
        duration: "3-6 months",
        price: "₹15,000/month"
    },
    {
        title: "Social Media Marketing",
        description: "Build your brand presence and engage with customers across social media platforms",
        features: [
            "Facebook & Instagram Marketing",
            "LinkedIn Business Promotion",
            "Twitter & YouTube Management",
            "Content Creation & Curation",
            "Community Management",
            "Influencer Collaborations"
        ],
        icon: "📱",
        duration: "Ongoing",
        price: "₹12,000/month"
    },
    {
        title: "Google Ads & PPC Campaigns",
        description: "Drive immediate traffic and conversions with targeted pay-per-click advertising",
        features: [
            "Google Search Ads",
            "Display Network Campaigns",
            "YouTube Video Ads",
            "Shopping Campaigns",
            "Remarketing Strategies",
            "Campaign Optimization"
        ],
        icon: "🎯",
        duration: "Ongoing",
        price: "₹10,000/month + Ad Spend"
    },
    {
        title: "Content Marketing",
        description: "Create valuable content that attracts and engages your target audience",
        features: [
            "Blog Writing & Management",
            "Video Content Creation",
            "Infographic Design",
            "Email Marketing Campaigns",
            "Content Strategy Development",
            "Brand Storytelling"
        ],
        icon: "✍️",
        duration: "Ongoing",
        price: "₹8,000/month"
    },
    {
        title: "Website Development",
        description: "Create professional, responsive websites that convert visitors into customers",
        features: [
            "Responsive Web Design",
            "E-commerce Development",
            "CMS Integration",
            "Mobile Optimization",
            "Performance Optimization",
            "Security Implementation"
        ],
        icon: "💻",
        duration: "4-8 weeks",
        price: "₹25,000"
    },
    {
        title: "Brand Identity Design",
        description: "Develop a strong brand identity that resonates with your target audience",
        features: [
            "Logo Design & Branding",
            "Business Card Design",
            "Marketing Collateral",
            "Brand Guidelines",
            "Packaging Design",
            "Brand Strategy Development"
        ],
        icon: "🎨",
        duration: "2-4 weeks",
        price: "₹15,000"
    }
];

// Marketing benefits
const marketingBenefits = [
    {
        icon: "📈",
        title: "Increased Visibility",
        description: "Boost your online presence and reach more potential customers"
    },
    {
        icon: "💰",
        title: "Higher ROI",
        description: "Get better returns on your marketing investment with targeted campaigns"
    },
    {
        icon: "🎯",
        title: "Better Targeting",
        description: "Reach the right audience with precision-targeted marketing strategies"
    },
    {
        icon: "📊",
        title: "Measurable Results",
        description: "Track and analyze your marketing performance with detailed analytics"
    }
];

// Success metrics
const successMetrics = [
    { metric: "300%", label: "Average Traffic Increase" },
    { metric: "250%", label: "Lead Generation Growth" },
    { metric: "180%", label: "Conversion Rate Improvement" },
    { metric: "95%", label: "Client Satisfaction Rate" }
];

// Custom hook for visibility
const useAlwaysVisible = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return isVisible;
};

export default function MarketingServices({ className = "" }) {
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
                {/* Floating Marketing Icons */}
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
                        📈
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
                        📈
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <span className="text-gray-900">Digital Marketing</span>
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"> & Growth</span>
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
                        Boost your business visibility and reach with our comprehensive digital marketing services. From SEO to social media, we help MSMEs establish a strong online presence and drive sustainable growth.
                    </motion.p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {marketingServices.map((service, index) => (
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
                        Why Choose Our Marketing Services?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine creativity, strategy, and data-driven insights to deliver exceptional marketing results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {marketingBenefits.map((benefit, index) => (
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

            {/* Success Metrics Section */}
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
                        Our Success Metrics
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Proven results that speak for themselves
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {successMetrics.map((metric, index) => (
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
                                {metric.metric}
                            </motion.div>
                            <p className="text-gray-600 font-semibold">{metric.label}</p>
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
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Let our digital marketing experts help you reach more customers, increase sales, and build a strong online presence for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.a
                            href="/contact-us"
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Marketing Campaign
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
MarketingServices.propTypes = {
    className: PropTypes.string,
};
