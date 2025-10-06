import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCTAModal } from "../../hooks/useCTAModal";
import { useModal } from "../../Context/ModalContext";

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
        duration: "5-20 days",
        link: "/services/legal"
    }
];

export default function AllServices({ className = "" }) {
    const { ctaRef } = useCTAModal();
    const { isAnyModalOpen, openFormModal } = useModal();

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Enhanced Animated Background with Orange Geometric Objects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Mesh Background */}
                <motion.div 
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(253,87,16,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(253,87,16,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(255,107,53,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(253,87,16,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(253,87,16,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(253,87,16,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(253,87,16,0.15) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Orange Geometric Objects - Scattered Across Page */}
                {[...Array(12)].map((_, i) => {
                    const shapes = [
                        // Circles
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-full",
                        "w-20 h-20 sm:w-24 sm:h-24 rounded-full",
                        // Squares
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg",
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-lg",
                        // Triangles (using clip-path)
                        "w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-orange-400/30",
                        "w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-orange-400/30",
                        // Diamonds
                        "w-12 h-12 sm:w-16 sm:h-16 transform rotate-45",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        // Hexagons (approximated with rounded corners)
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg transform rotate-12",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg transform -rotate-12"
                    ];
                    
                    return (
                        <motion.div
                            key={i}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-orange-400/25 to-red-400/25`}
                            animate={{
                                x: [0, 150, -80, 0],
                                y: [0, -120, 60, 0],
                                rotate: [0, 180, -180, 0],
                                scale: [0.6, 1.4, 1, 0.6],
                            }}
                            transition={{
                                duration: 20 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.2,
                            }}
                            style={{
                                left: `${5 + (i * 7) % 85}%`,
                                top: `${10 + (i * 8) % 70}%`,
                            }}
                        />
                    );
                })}
                
                {/* Additional Orange Objects - Scattered Randomly */}
                {[...Array(15)].map((_, i) => {
                    const objectTypes = [
                        // Small circles
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full",
                        "w-4 h-4 sm:w-6 sm:h-6 rounded-full",
                        // Small squares
                        "w-5 h-5 sm:w-7 sm:h-7 rounded",
                        "w-3 h-3 sm:w-5 sm:h-5 rounded",
                        // Small triangles
                        "w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-orange-400/20",
                        "w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-400/20",
                        // Small diamonds
                        "w-4 h-4 sm:w-6 sm:h-6 transform rotate-45",
                        "w-3 h-3 sm:w-5 sm:h-5 transform rotate-45",
                        // Small rectangles
                        "w-8 h-4 sm:w-10 sm:h-5 rounded",
                        "w-6 h-3 sm:w-8 sm:h-4 rounded",
                        // Small ovals
                        "w-10 h-6 sm:w-12 sm:h-8 rounded-full",
                        "w-8 h-5 sm:w-10 sm:h-6 rounded-full",
                        // Small stars (approximated)
                        "w-6 h-6 sm:w-8 sm:h-8 transform rotate-45",
                        "w-4 h-4 sm:w-6 sm:h-6 transform rotate-45",
                        // Small hexagons
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-lg transform rotate-30"
                    ];
                    
                    return (
                        <motion.div
                            key={`small-${i}`}
                            className={`absolute ${objectTypes[i % objectTypes.length]} bg-gradient-to-r from-orange-300/20 to-red-300/20`}
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -80, 40, 0],
                                rotate: [0, 360, -360, 0],
                                scale: [0.5, 1.2, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 15 + i * 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.8,
                            }}
                            style={{
                                left: `${Math.random() * 90}%`,
                                top: `${Math.random() * 80}%`,
                            }}
                        />
                    );
                })}
                
                {/* Orange Animated Lines - Scattered */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-1 sm:h-2 bg-gradient-to-r from-orange-400/40 to-red-400/40"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.6,
                        }}
                        style={{
                            width: `${200 + i * 50}px`,
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 70}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    />
                ))}
                
                {/* Orange Floating Objects - Various Shapes */}
                {[...Array(10)].map((_, i) => {
                    const shapes = [
                        // Large circles
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-full",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-full",
                        // Large squares
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-lg",
                        "w-8 h-8 sm:w-12 sm:h-12 rounded-lg",
                        // Large triangles
                        "w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-orange-400/25",
                        "w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-orange-400/25",
                        // Large diamonds
                        "w-10 h-10 sm:w-14 sm:h-14 transform rotate-45",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        // Large rectangles
                        "w-16 h-8 sm:w-20 sm:h-10 rounded-lg",
                        "w-12 h-6 sm:w-16 sm:h-8 rounded-lg"
                    ];
                    
                    return (
                        <motion.div
                            key={`floating-${i}`}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-orange-400/30 to-red-400/30`}
                            animate={{
                                x: [0, 120, -60, 0],
                                y: [0, -100, 50, 0],
                                rotate: [0, 180, -180, 0],
                                scale: [0.6, 1.3, 0.9, 0.6],
                            }}
                            transition={{
                                duration: 18 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.8,
                            }}
                            style={{
                                left: `${Math.random() * 85}%`,
                                top: `${Math.random() * 75}%`,
                            }}
                        />
                    );
                })}
            </div>

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
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Our
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Comprehensive
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Services
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Empowering MSMEs and startups with end-to-end business solutions. From funding to growth, we provide comprehensive support to help your business thrive in today&apos;s competitive landscape.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {servicesData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                        <div className="relative z-10">
                            {/* Service Icon */}
                            <div className="text-6xl mb-6">{service.icon}</div>
                            
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
                                    <div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-sm text-gray-700"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Duration */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                                    <div className="text-sm font-semibold text-orange-600">Duration</div>
                                    <div className="text-lg font-bold text-gray-800">{service.duration}</div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <a
                                href={service.link}
                                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>
                    );
                })}
            </motion.div>

            {/* Why Choose Us Section */}
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
                        Why Choose Our Services?
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        We combine expertise, experience, and dedication to deliver exceptional results for your business
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {[
                        {
                            icon: "🎯",
                            title: "Expert Team",
                            description: "5+ years of combined experience in MSME consulting and business development"
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
                    ].map((item, index) => {
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
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                ref={ctaRef}
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
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Join thousands of successful MSMEs who trust us with their growth journey. Get started today with our comprehensive business solutions.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <button
                            onClick={() => { if (!isAnyModalOpen) { openFormModal(); } }}
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Get Started Today
                        </button>
                        <a
                            href="tel:+917383930301"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
                        >
                            Call Now: +91 7383930301
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

// PropTypes
AllServices.propTypes = {
    className: PropTypes.string,
};
