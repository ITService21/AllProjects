import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCTAModal } from "../../hooks/useCTAModal";
import { useModal } from "../../Context/ModalContext";

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
        // price: "₹12,000"
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
        // price: "₹8,000"
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
        // price: "₹15,000"
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
        // price: "₹10,000"
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
        // price: "₹20,000"
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
        // price: "₹25,000"
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

export default function LegalServices({ className = "" }) {
    const { ctaRef } = useCTAModal();
    const { isAnyModalOpen, openFormModal } = useModal();

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Enhanced Animated Background with Orange Geometric Objects */}
            <div className="absolute inset-0 overflow-hidden"></div>
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

            {/* Header Section */}
            <motion.div 
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div 
                        className="text-6xl sm:text-8xl mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2004, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                        animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                    >
                        ⚖️
                    </motion.div>
                    
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Legal &amp;
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Compliance
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2002, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Support
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Navigate complex legal requirements with confidence. Our expert legal team provides comprehensive support for business registration, compliance, contracts, and ongoing legal guidance.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {legalServices.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.2001, delay: 0.2 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.2003 }
                            }}
                        >
                        <div className="relative z-10">
                            {/* Service Icon */}
                            <div className="text-4xl mb-4">{service.icon}</div>
                            
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
                                    <div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-xs text-gray-700"
                                    >
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Stats */}
                            <div className="flex gap-2 w-[150px]">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 rounded-lg border border-orange-100 flex-1">
                                    <div className="text-xs font-semibold text-orange-600">Duration</div>
                                    <div className="text-sm font-bold text-gray-800">{service.duration}</div>
                                </div>
                                {/* <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 rounded-lg border border-orange-100 flex-1">
                                    <div className="text-xs font-semibold text-orange-600">Price</div>
                                    <div className="text-sm font-bold text-gray-800">{service.price}</div>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                    );
                })}
            </motion.div>

            {/* Expertise Areas Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our Legal Expertise
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Comprehensive legal services across multiple practice areas
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2002, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {expertiseAreas.map((area, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.2001, delay: 0.4 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.2003 }
                                }}
                            >
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                                <p className="text-gray-600">{area.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Process Section */}
            <motion.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2002, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2001, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Our Legal Process
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2002, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        A systematic approach to handling your legal requirements efficiently
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2002, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.2001, delay: 0.4 + index * 0.1, ease: [0.05001, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.2003 }
                                }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                ref={ctaRef}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2004, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
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
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2001, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Need Legal Support?
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2001, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Get expert legal guidance and support for all your business needs. Our experienced legal team is here to help you navigate complex legal requirements with confidence.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2001, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.button
                            onClick={() => { if (!isAnyModalOpen) { openFormModal(); } }}
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Legal Consultation
                        </motion.button>
                        <motion.a
                            href="tel:+917383930301"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "#F85710" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Call Now: +91 7383930301
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

// PropTypes
LegalServices.propTypes = {
    className: PropTypes.string,
};
