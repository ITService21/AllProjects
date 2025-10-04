import { motion } from "framer-motion";

function VisionMission() {
    // Removed unused mobile detection for better performance

    // Removed heavy animation variants for better performance

    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Beautiful Animated Background from Contact */}
            <div className="absolute inset-0">
                {/* Animated Mesh Background */}
                <motion.div
                    className="absolute inset-0 opacity-8"
                    animate={{
                        background: [
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 75% 25%, rgba(255, 107, 53, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(253, 87, 16, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Triangles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-12"
                        style={{
                            width: `${30 + i * 8}px`,
                            height: `${30 + i * 8}px`,
                            background: `linear-gradient(45deg, #F85710, #FF6B35)`,
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            left: `${8 + i * 11}%`,
                            top: `${15 + i * 8}%`,
                        }}
                        animate={{
                            x: [0, 70, -35, 0],
                            y: [0, -50, 25, 0],
                            rotate: [0, 120, 240, 360],
                            scale: [1, 1.3, 0.7, 1.1, 1],
                            opacity: [0.12, 0.25, 0.08, 0.18, 0.12]
                        }}
                        transition={{
                            duration: 8 + i * 1.2,
                            repeat: Infinity,
                            delay: i * 1.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Animated Dots Pattern */}
                <motion.div 
                    className="absolute inset-0 opacity-5"
                    animate={{
                        backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(253, 87, 16, 0.3) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating Squares with Bounce */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 opacity-40"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, -10, 0],
                            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                            opacity: [0.4, 0.7, 0.2, 0.5, 0.4],
                            rotate: [0, 90, 180, 270, 360]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${2 + i * 6}%`,
                            top: `${10 + i * 5}%`,
                        }}
                    />
                ))}

                {/* Animated Zigzag Lines */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`zigzag-${i}`}
                        className="absolute w-32 h-1 bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0"
                        animate={{
                            opacity: [0, 0.6, 0],
                            scaleX: [0, 1, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${15 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            transformOrigin: 'left center'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Fast Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" 
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                    >
                        <motion.span 
                            className="text-gray-800 block"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Our
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Mission & Vision
                        </motion.span>
                    </h2>
                    
                    <motion.div 
                        className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                </motion.div>

                {/* Fast Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {/* Mission Card - Slides from Left */}
            <motion.div
                        initial={{ opacity: 0, x: -120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                        <div className="relative z-10">
                            {/* Simple Icon */}
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                                🎯
                            </div>
                            
                            {/* Fast Content Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                    Our Mission
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-lg mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                                    To empower MSMEs and startups with comprehensive business solutions, from inception to expansion, fostering sustainable growth and creating lasting impact in the entrepreneurial ecosystem.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base" style={{fontFamily: 'Inter, sans-serif'}}>
                                    We are committed to providing end-to-end support including business registration, funding assistance, compliance management, and strategic guidance to help businesses thrive in today&apos;s competitive landscape.
                                </p>
                            </motion.div>
                        </div>
            </motion.div>

                    {/* Vision Card - Slides from Right */}
            <motion.div
                        initial={{ opacity: 0, x: 120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                        <div className="relative z-10">
                            {/* Simple Icon */}
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                                👁️
                            </div>
                            
                            {/* Fast Content Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black mb-4" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                    Our Vision
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed text-lg mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                                    To be the premier MSME consultancy in Gandhinagar, recognized as the catalyst for entrepreneurial success and business transformation across India.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base" style={{fontFamily: 'Inter, sans-serif'}}>
                                    We envision a future where every startup and small business has access to world-class guidance, enabling them to scale globally while maintaining their local roots and values.
                </p>
            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default VisionMission;
