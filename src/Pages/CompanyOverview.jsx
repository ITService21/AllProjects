import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useModal } from "../Context/ModalContext";


/* Comprehensive MSME and Startup Business Data */
const myData = {
    company: {
        name: "Grow Startup Consultancy",
        tagline: "Empowering MSMEs and Startups for Sustainable Growth",
        description: "We are Gandhinagar's premier MSME consultancy firm, providing comprehensive business solutions from startup inception to expansion. Based in Gandhinagar, we serve entrepreneurs across India with expert guidance, funding assistance, compliance management, and strategic business growth consulting.",
        heroImage: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
        email: "info@growstartup.in",
        website: "https://growstartup.in",
        founded: "2025",
        location: "Gandhinagar, Gujarat",
        teamSize: "50+ Experts"
    },
    vision: { 
        title: "Our Vision", 
        text: "To be the premier MSME consultancy in Gandhinagar, recognized as the catalyst for entrepreneurial success and business transformation across India. We envision a future where every startup and small business has access to world-class guidance, enabling them to scale globally while maintaining their local roots and values." 
    },
    mission: { 
        title: "Our Mission", 
        text: "To empower MSMEs and startups with comprehensive business solutions, from inception to expansion, fostering sustainable growth and creating lasting impact in the entrepreneurial ecosystem. We are committed to providing end-to-end support including business registration, funding assistance, compliance management, and strategic guidance." 
    },
    stats: [
        { label: "Successful Projects", value: 2500 },
        { label: "Happy Clients", value: 1800 },
        { label: "Years of Experience", value: 5 },
        { label: "Team Members", value: 50 },
        { label: "Cities Served", value: 25 },
        { label: "Funding Raised (Cr)", value: 150 }
    ],
    services: [
        {
            title: "Business Registration & Setup",
            description: "Complete business registration services including Private Limited Company, LLP, Partnership Firm, One Person Company, and Sole Proprietorship registration with all legal formalities.",
            icon: "🏢"
        },
        {
            title: "Funding & Investment",
            description: "Assistance with government grants, equity-based funding, NBFC business loans, Startup India scheme benefits, angel investments, and venture capital connections.",
            icon: "💰"
        },
        {
            title: "MSME & ZED Certification",
            description: "MSME certification in 7-15 days, ZED certification for quality improvement, and various industry-specific certifications to enhance business credibility.",
            icon: "🏆"
        },
        {
            title: "Compliance & Legal Support",
            description: "Ongoing compliance management including GST registration, tax filing, labor law compliance, annual returns, and legal documentation support.",
            icon: "⚖️"
        },
        {
            title: "Digital Marketing",
            description: "Comprehensive digital marketing services including SEO, social media marketing, Google Ads, content marketing, email marketing, and website development.",
            icon: "📱"
        },
        {
            title: "Business Growth Strategy",
            description: "Strategic business planning, market analysis, expansion strategies, merger & acquisition support, and long-term growth consulting.",
            icon: "📈"
        }
    ],
    achievements: [
        "Recognized by Startup India as a certified incubator",
        "Awarded 'Best MSME Consultancy' by Gujarat Chamber of Commerce",
        "Featured in Economic Times for innovative business solutions",
        "Partner with 50+ financial institutions for funding assistance",
        "ISO 9001:2015 certified for quality management",
        "Member of Confederation of Indian Industry (CII)"
    ],
    team: [
        {
            name: "Rajesh Kumar",
            position: "Founder & CEO",
            experience: "15+ years in business consulting",
            expertise: "Strategic Planning, Business Development"
        },
        {
            name: "Priya Sharma",
            position: "Head of Operations",
            experience: "12+ years in MSME sector",
            expertise: "Compliance Management, Legal Affairs"
        },
        {
            name: "Amit Patel",
            position: "Funding Specialist",
            experience: "10+ years in finance",
            expertise: "Investment Banking, Fundraising"
        },
        {
            name: "Sneha Gupta",
            position: "Digital Marketing Head",
            experience: "8+ years in digital marketing",
            expertise: "SEO, Social Media, Brand Building"
        }
    ],
    links: [
        { label: "Our Services", href: "/services" },
        { label: "Success Stories", href: "/case-studies" },
        { label: "Contact Us", href: "/contact" },
        { label: "Free Consultation", href: "/consultation" }
    ],
};

export default function CompanyOverview({ data = myData, onContactClick = null, className = "" }) {
    const { isAnyModalOpen, openFormModal } = useModal();
    
    // Simple animation variants - content is visible by default
    const fadeUp = { 
        visible: { opacity: 1, y: 0 }
    };

    // Enhanced Stat subcomponent: animated counter with impressive design
    function Stat({ label, value }) {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-10% 0% -10% 0%" });
        const [n, setN] = useState(0);
        const [hasAnimated, setHasAnimated] = useState(false);

        useEffect(() => {
            // Simple animation trigger
            if (inView && !hasAnimated) {
                setHasAnimated(true);
                let startTime = null;
                const duration = 2000;
                
                const animate = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for smooth animation
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    const currentValue = Math.floor(easeOutCubic * value);
                    
                    setN(currentValue);
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                
                requestAnimationFrame(animate);
            }
        }, [inView, value, hasAnimated]);

        return (
            <motion.div 
                ref={ref} 
                className="relative p-6 bg-gradient-to-br from-white via-orange-50 to-red-50 rounded-2xl shadow-xl border border-orange-100 text-center overflow-hidden group"
                initial={{ opacity: 1, scale: 1, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(253, 87, 16, 0.2)",
                    transition: { duration: 0.3 }
                }}
            >
                {/* Animated Background */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100"
                    animate={{
                        background: [
                            "linear-gradient(45deg, rgba(253,87,16,0.1) 0%, rgba(255,107,53,0.05) 50%, rgba(253,87,16,0.1) 100%)",
                            "linear-gradient(45deg, rgba(255,107,53,0.1) 0%, rgba(253,87,16,0.05) 50%, rgba(255,107,53,0.1) 100%)",
                            "linear-gradient(45deg, rgba(253,87,16,0.1) 0%, rgba(255,107,53,0.05) 50%, rgba(253,87,16,0.1) 100%)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating Elements */}
                <motion.div 
                    className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="relative z-10">
                    <motion.div 
                        className="text-3xl sm:text-4xl font-black leading-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {n.toLocaleString()}
                    </motion.div>
                    <motion.div 
                        className="text-sm sm:text-base text-gray-700 mt-2 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {label}
                    </motion.div>
            </div>
                
                {/* Decorative Corner */}
                <motion.div 
                    className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-orange-500 to-red-500 opacity-20 rounded-tl-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        );
    }
    
    // PropTypes for Stat component
    Stat.propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    };

    // contact handler (prefers a provided handler)
    const handleContact = (e) => {
        if (typeof onContactClick === "function") return onContactClick(e);
        if (!isAnyModalOpen) {
            openFormModal();
        }
    };

    // safe array helper
    const safe = (arr) => (Array.isArray(arr) ? arr : []);

    if (!data || !data.company) {
        return (
            <div className="min-h-[180px] flex items-center justify-center p-6 text-center">
                <div>
                    <p className="font-semibold">No data provided</p>
                    <p className="text-sm text-gray-500">Pass a `data` prop to render the component.</p>
                </div>
            </div>
        );
    }

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >

            {/* Hero Section */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {/* Left: text - Slides from LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
                            Grow
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Startup
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Consultancy
                        </motion.span>
                    </motion.h1>

                    {data.company.tagline && (
                        <motion.p 
                            className="mt-2 text-lg sm:text-xl text-gray-600 mb-4"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {data.company.tagline}
                        </motion.p>
                    )}

                    {data.company.description && (
                        <motion.p 
                            className="mt-4 text-base sm:text-lg text-gray-700 max-w-prose leading-relaxed mb-6"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {data.company.description}
                        </motion.p>
                    )}

                    {/* Enhanced Company Info Cards */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {[
                            { label: "Founded", value: data.company.founded, icon: "🏢" },
                            { label: "Location", value: data.company.location, icon: "📍" },
                            { label: "Team Size", value: data.company.teamSize, icon: "👥" }
                        ].map((info, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={index}
                                    className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 shadow-lg overflow-hidden group"
                                    initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        y: -3,
                                        transition: { duration: 0.3 }
                                    }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                <div className="relative z-10">
                                    <div className="text-2xl mb-2">{info.icon}</div>
                                    <div className="text-sm font-semibold text-orange-600 mb-1">{info.label}</div>
                                    <div className="text-lg font-bold text-gray-800">{info.value}</div>
                                </div>
                            </motion.div>
                        );
                        })}
                    </motion.div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={handleContact}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 hover:shadow-lg transition-all duration-300"
                            aria-label="Contact company"
                        >
                            Get Free Consultation
                        </button>

 
                    </div>

                    {/* Quick links */}
                    {/* {Array.isArray(data.links) && data.links.length > 0 && (
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            {data.links.map((l, i) => (
                                <a key={i} href={l.href} className="text-sm text-orange-600 hover:text-orange-800 hover:underline font-medium">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )} */}
                </motion.div>

                {/* Right: image + stats - Slides from RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 120, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="space-y-6"
                >
                    {data.company.heroImage ? (
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={data.company.heroImage}
                                alt={`${data.company.name} hero`}
                                className={`w-full object-cover h-64 sm:h-80 md:h-96 lg:h-[500px]`}
                                loading="lazy"
                            />
                        </div>
                    ) : null}

                    {/* Enhanced stats */}
                    {safe(data.stats).length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {safe(data.stats).map((s) => (
                                <Stat key={s.label} {...s} />
                            ))}
                        </div>
                    )}
                </motion.div>
            </motion.div>

            {/* Enhanced Vision & Mission Section */}
            <motion.div 
                className="mb-20 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {/* Section Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-red-50/30 to-orange-50/50 rounded-3xl"></div>
                
                <div className="relative z-10 p-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.h2 
                            className="text-3xl sm:text-4xl font-bold mb-4"
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
                                {" "}Vision
                            </motion.span>
                            <motion.span 
                                className="text-gray-900"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {" "}&{" "}
                            </motion.span>
                            <motion.span 
                                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                Mission
                            </motion.span>
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Guiding principles that drive our commitment to MSME and startup success
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        {data.vision && (
                            <motion.div
                                initial={{ opacity: 0, x: -120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative z-10">
                                    <div className="text-5xl mb-6">👁️</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{data.vision.title || "Vision"}</h3>
                                    <p className="text-gray-700 leading-relaxed">{data.vision.text}</p>
                                </div>
                            </motion.div>
                        )}

                        {data.mission && (
                            <motion.div
                                initial={{ opacity: 0, x: 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative z-10">
                                    <div className="text-5xl mb-6">🎯</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{data.mission.title || "Mission"}</h3>
                                    <p className="text-gray-700 leading-relaxed">{data.mission.text}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Services Section */}
            {data.services && (
                <motion.div 
                    className="mb-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {/* Section Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-red-50/20 to-orange-50/30 rounded-3xl"></div>
                    
                    <div className="relative z-10 p-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4"
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
                                <motion.span 
                                    className="text-gray-900"
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    {" "}Services
                                </motion.span>
                            </motion.h2>
                            <motion.p 
                                className="text-lg text-gray-600 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                End-to-end business solutions for MSMEs and startups
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            {data.services.map((service, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                                        whileHover={{ 
                                            scale: 1.02, 
                                            y: -5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                    <div className="relative z-10">
                                        <div className="text-5xl mb-6">{service.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Enhanced Achievements Section */}
            {data.achievements && (
                <motion.div 
                    className="mb-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {/* Section Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50/40 via-red-50/30 to-orange-50/40 rounded-3xl"></div>
                    
                    <div className="relative z-10 p-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-bold mb-4"
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
                                    {" "}Achievements
                                </motion.span>
                                <motion.span 
                                    className="text-gray-900"
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    {" "}&{" "}
                                </motion.span>
                                <motion.span 
                                    className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    Recognition
                                </motion.span>
                            </motion.h2>
                            <motion.p 
                                className="text-lg text-gray-600 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                Proud milestones and industry recognition
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.15 }}
                        >
                            {data.achievements.map((achievement, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="relative bg-white p-6 rounded-2xl border border-orange-100 shadow-xl overflow-hidden group"
                                        whileHover={{ 
                                            scale: 1.02, 
                                            y: -3,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="text-3xl">🏆</div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{achievement}</p>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Enhanced Team Section */}

            {/* Enhanced Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-12 text-center text-white overflow-hidden"
            >
                {/* Simple background elements for performance */}
                <div className="absolute inset-0">
                    {[...Array(2)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-16 h-16 bg-white/5 rounded-full"
                            animate={{
                                scale: [0.8, 1.1, 0.8],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 4,
                            }}
                            style={{
                                left: `${30 + i * 40}%`,
                                top: `${30 + i * 30}%`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative z-10">
                    <motion.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Ready to Grow Your Business?
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Join thousands of successful MSMEs and startups who trust us with their growth journey
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.button
                            onClick={handleContact}
                            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
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

// PropTypes for component validation
CompanyOverview.propTypes = {
    data: PropTypes.object,
    onContactClick: PropTypes.func,
    className: PropTypes.string,
};

