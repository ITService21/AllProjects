import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function VisionMission() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: -150,
            scale: 0.6,
            rotateZ: -10
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateZ: 0,
            transition: {
                duration: 1.5,
                ease: [0.68, -0.55, 0.265, 1.55],
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    const cardVariantsRight = {
        hidden: { 
            opacity: 0, 
            x: 150,
            scale: 0.6,
            rotateZ: 10
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateZ: 0,
            transition: {
                duration: 1.5,
                ease: [0.68, -0.55, 0.265, 1.55],
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            rotateX: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Unique Animated Background */}
            <div className="absolute inset-0">
                {/* Animated Circuit Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-8"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 20%, rgba(253, 87, 16, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(253, 87, 16, 0.08) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 20%, rgba(253, 87, 16, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Floating Diamond Shapes */}
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-12"
                        style={{
                            width: `${40 + i * 10}px`,
                            height: `${40 + i * 10}px`,
                            background: `linear-gradient(45deg, #F85710, #FF6B35)`,
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            left: `${8 + i * 13}%`,
                            top: `${12 + i * 12}%`,
                        }}
                        animate={{
                            x: [0, 60, -30, 0],
                            y: [0, -40, 20, 0],
                            rotate: [0, 90, 180, 270, 360],
                            scale: [1, 1.4, 0.6, 1.2, 1],
                            opacity: [0.12, 0.25, 0.08, 0.18, 0.12]
                        }}
                        transition={{
                            duration: 9 + i * 1.5,
                            repeat: Infinity,
                            delay: i * 1.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                
                {/* Animated Circuit Lines */}
                <motion.div 
                    className="absolute inset-0 opacity-6"
                    animate={{
                        backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(253, 87, 16, 0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                
                {/* Floating Circles with Bounce */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-50"
                        animate={{
                            y: [0, -60, 0],
                            x: [0, 30, -15, 0],
                            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
                            opacity: [0.5, 0.8, 0.3, 0.6, 0.5],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 5 + i * 0.8,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${3 + i * 8}%`,
                            top: `${8 + i * 6}%`,
                        }}
                    />
                ))}
                
                {/* Animated Pulse Rings */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        className="absolute border-2 border-orange-400/20 rounded-full"
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            left: `${20 + i * 20}%`,
                            top: `${15 + i * 20}%`,
                        }}
                        animate={{
                            scale: [0.8, 1.5, 0.8],
                            opacity: [0.2, 0.6, 0.2],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section with High-Class Animations */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ amount: 0.3 }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" 
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                        initial={{ opacity: 0, scale: 0.5, rotateX: -30 }}
                        whileInView={{ 
                            opacity: 1, 
                            scale: 1,
                            rotateX: 0
                        }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        viewport={{ amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-800 block"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ amount: 0.3 }}
                        >
                            Our
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ amount: 0.3 }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                                backgroundPosition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        > Mission & Vision
                        </motion.span>
                    </motion.h2>
                    
                    <motion.div 
                        className="relative mx-auto w-32 h-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ amount: 0.3 }}
                     >
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ amount: 0.3 }}
                        />
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            animate={{
                                scaleX: [0, 1, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
            <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                viewport={{ amount: 0.2 }}
                >
                    {/* Mission Card - First */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ 
                            scale: 1.1,
                            y: -20,
                            rotateZ: 2,
                            transition: { 
                                duration: 0.5, 
                                ease: [0.68, -0.55, 0.265, 1.55],
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }
                        }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                    >
                        {/* Animated Background */}
                        <motion.div 
                            className="absolute inset-0 rounded-3xl"
                            initial={{ 
                                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                            }}
                            whileHover={{ 
                                background: [
                                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)',
                                    'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(253,87,16,0.03) 50%, rgba(255,255,255,1) 100%)',
                                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)'
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Animated Border */}
                        <motion.div 
                            className="absolute inset-0 rounded-3xl border-2 border-transparent"
                            initial={{ 
                                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, transparent) border-box'
                            }}
                            whileHover={{ 
                                background: [
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box',
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(255,107,53,0.3), rgba(253,87,16,0.3)) border-box',
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box'
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <motion.div 
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                    boxShadow: [
                                        '0 10px 25px rgba(253, 87, 16, 0.3)',
                                        '0 25px 50px rgba(253, 87, 16, 0.5)',
                                        '0 10px 25px rgba(253, 87, 16, 0.3)'
                                    ]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: 0.5
                                }}
                            >
                                🎯
                            </motion.div>
                            
                            {/* Content with Staggered Animation */}
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                    Our Mission
                                </h3>
                                
                                <motion.p 
                                    className="text-gray-600 leading-relaxed text-lg mb-4" 
                                    style={{fontFamily: 'Inter, sans-serif'}}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    To empower MSMEs and startups with comprehensive business solutions, from inception to expansion, fostering sustainable growth and creating lasting impact in the entrepreneurial ecosystem.
                                </motion.p>
                                <motion.p 
                                    className="text-gray-500 leading-relaxed text-base" 
                                    style={{fontFamily: 'Inter, sans-serif'}}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    We are committed to providing end-to-end support including business registration, funding assistance, compliance management, and strategic guidance to help businesses thrive in today's competitive landscape.
                                </motion.p>
                            </motion.div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <motion.div 
                            className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5
                            }}
                        />
            </motion.div>

                    {/* Vision Card - Second */}
                    <motion.div
                        variants={cardVariantsRight}
                        whileHover={{ 
                            scale: 1.1,
                            y: -20,
                            rotateZ: -2,
                            transition: { 
                                duration: 0.5, 
                                ease: [0.68, -0.55, 0.265, 1.55],
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }
                        }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                    >
                        {/* Animated Background */}
                        <motion.div 
                            className="absolute inset-0 rounded-3xl"
                            initial={{ 
                                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                            }}
                            whileHover={{ 
                                background: [
                                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)',
                                    'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(253,87,16,0.03) 50%, rgba(255,255,255,1) 100%)',
                                    'linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)'
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Animated Border */}
                        <motion.div 
                            className="absolute inset-0 rounded-3xl border-2 border-transparent"
                            initial={{ 
                                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, transparent) border-box'
                            }}
                            whileHover={{ 
                                background: [
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box',
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(255,107,53,0.3), rgba(253,87,16,0.3)) border-box',
                                    'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(253,87,16,0.3), rgba(255,107,53,0.3)) border-box'
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <motion.div 
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg"
                                animate={{ 
                                    rotate: [0, -10, 10, 0],
                                    scale: [1, 1.1, 1],
                                    boxShadow: [
                                        '0 10px 25px rgba(253, 87, 16, 0.3)',
                                        '0 25px 50px rgba(253, 87, 16, 0.5)',
                                        '0 10px 25px rgba(253, 87, 16, 0.3)'
                                    ]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: 1
                                }}
                            >
                                👁️
                            </motion.div>
                            
                            {/* Content with Staggered Animation */}
            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                    Our Vision
                                </h3>
                                
                                <motion.p 
                                    className="text-gray-600 leading-relaxed text-lg mb-4" 
                                    style={{fontFamily: 'Inter, sans-serif'}}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    To be the premier MSME consultancy in Gujarat, recognized as the catalyst for entrepreneurial success and business transformation across India.
                                </motion.p>
                                <motion.p 
                                    className="text-gray-500 leading-relaxed text-base" 
                                    style={{fontFamily: 'Inter, sans-serif'}}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    We envision a future where every startup and small business has access to world-class guidance, enabling them to scale globally while maintaining their local roots and values.
                                </motion.p>
                            </motion.div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <motion.div 
                            className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1
                            }}
                        />
                    </motion.div>
            </motion.div>
            </div>
        </section>
    );
}

export default VisionMission;
